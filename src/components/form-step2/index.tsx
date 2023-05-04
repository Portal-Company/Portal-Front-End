
import * as S from './styles'
import Input from "../input"
import { ICandidate, IContact, MyComponentProps, Values, ValuesR } from '../../views/resistrationTest/type'
import { useRouter } from 'next/router';
import { api, getCoursesSchool } from '../../services';
import useSWR from "swr"
import { toast } from "react-toastify";
import { ICourses, IErrorInterface } from '../form-step1/type';
import { Field, Form, Formik } from 'formik';

export const StepTwo:React.FC<MyComponentProps>= ({
    next,
    data,
    setData
}) =>{

    const {
        query:{escolaId}
    }=useRouter();

    const {data:courses,error:coursesError}=useSWR("courses",()=>getCoursesSchool(escolaId));
    

    const handleSubmit = async (values:any) =>{
        console.log(data,values);

        const formData = new FormData();
        const formData2 = new FormData();
        const formData3 = new FormData();

        formData.append('file', values.photo[0]);
        formData2.append('file', values.pdfIdentificacao[0]);
        formData3.append('file', values.pdfCertificacaoEscolar[0]);
        
        const contactData:IContact={
            numeroTelefone:data.numeroTelefone.toString(),
            email:data.email
        }

        console.log(contactData);
        const [
            photoResponse,
            identificationResponse,
            certificationResponse,
            constactResponse
        ]=await Promise.all([
            api.post('/file', formData),
            api.post('/file', formData2),
            api.post('/file', formData3),
            api.post('/contact/post', contactData)
        ]);
        console.log(constactResponse);

        const candidate:ICandidate={
            nome: data.nomeCompleto,
            sexo:data.sexo,
            dataNasc:data.dataNasc,
            contatoId:constactResponse.data.id,
            photoUrl:photoResponse.data.id,
            tipoIdentificacao:data.tipoIdentificacao,
            codigoDocumento:data.codigoDocumento,
            pdfIdentificacao: identificationResponse.data.id,
            tipoCertificacaoEscolar:values.tipoCertificacaoEscolar,
            pdfCertificacaoEscolar:certificationResponse.data.id
        }
        console.log(candidate);
        const resposeCandidate = await api.post('/candidate/post', candidate);
        console.log(resposeCandidate.data.id);

        const subscription={
            escolaId:escolaId,
            candidatoId:resposeCandidate?.data?.id
        }

        try{
            const responseSubscription = await api.post('/enrollment/post',subscription);
            const intendedCourseData={
                inscricaoId:responseSubscription.data.id,
                cursoId:values.cursoId
            } 
            if(responseSubscription){
                const intendendCourseResponse = await api.post('/intendedCourse/post',intendedCourseData);
                console.log(intendendCourseResponse);
                next(data);
                toast("Cadastro feito com sucesso", {autoClose: 2000, type: "success"})
            }
        }catch(err){
            const error = err as IErrorInterface
            toast(error.response?.data?.error, {autoClose: 2000, type: "error"})
        }         
    } 
    
    return(<Formik
        initialValues={{
            tipoCertificacaoEscolar:"",
            cursoId:"",
            photo:null,
            pdfIdentificacao:null,
            pdfCertificacaoEscolar:null
            }
        }
        onSubmit={values=> handleSubmit(values)}
        >
        {(formik)=>(
            <Form>
                <S.FormCard>
                    <S.Paragraph>
                        Para iniciar o processo de abertura de conta, precisamos de validar o seu nº de telemóvel.
                    </S.Paragraph>
                    <S.FormContainer>
                        <Field name="tipoCertificacaoEscolar" id="tipoCertificacaoEscolar" component="select">
                            <option>tipo de certificação escolar</option>
                            <option value="Declaracao_com_Notas">Declaracao_com_Notas</option>
                            <option value="Certificado_de_Habilitaoes">Certificado_de_Habilitaoes</option>    
                        </Field>
                        <Field name="cursoId" id="curso" component="select">
                        <option>curso pretendido</option>
                            {courses?.map((item:ICourses,index:number)=>(
                                <option value={item?.id} key={index}>{item?.nome}</option>
                            ))}
                        </Field>
                        <input
                            type="file"
                            name="photo"
                            onChange={(event) => {
                                formik.setFieldValue("photo", event.currentTarget.files)}}
                            />
                        <input
                            type="file"
                            name="pdfIdentificacao"
                            onChange={(event) => {
                            formik.setFieldValue("pdfIdentificacao", event.currentTarget.files)}}
                        />
                        <input
                            type="file"
                            name="pdfCertificacaoEscolar"
                            onChange={(event) => {
                            formik.setFieldValue("pdfCertificacaoEscolar", event.currentTarget.files)}}
                        />    
                        <button type="submit">Next</button>
                    </S.FormContainer>
                </S.FormCard>
            </Form>
        )}
    </Formik>)}
    

/*interface MyComponentProps {
    handleNextStep: (newData:Values) =>void;
    data:Values;
}

const FormStep2:React.FC<MyComponentProps>=({handleNextStep , data:ValuesR})=>{
    
    return(
        <S.WrapperContainer>
            <S.FormCard>
                <S.Paragraph>
                    Para iniciar o processo de abertura de conta, precisamos de validar o seu nº de telemóvel.
                </S.Paragraph>
                <S.Forms>
                    <Input 
                        placeholder='O sua foto' 
                        type='file'
                        name="photoUrl"
                    />
                    <Input placeholder='O sua foto' name="pdfBi" type='file'/>
                    <Input placeholder='O sua foto' name="pdfCertificado" type='file'/>
                    <Input placeholder='O sua foto' name="pdfDeclaração" type='file'/>
                </S.Forms>
            </S.FormCard>
        </S.WrapperContainer>       
    )
}
export default FormStep2*/