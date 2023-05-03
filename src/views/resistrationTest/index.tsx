import {useState} from "react"
import {Formik,Form,Field} from "formik"
import { useFormik,useField } from "formik";
import { ICandidate, IContact } from "./type";
import { api, getCoursesSchool } from "../../services";
import Router, { useRouter } from "next/router";
import useSWR from "swr"
import { toast } from "react-toastify";
import { IErrorInterface } from "../../components/form-step1/type";

const StudentSubscriptionTest = () => {
    const [data,setData]=useState({
        nomeCompleto:"",
        sexo:"",
        dataNasc:"",
        numeroTelefone:"",
        email:"",
        codigoDocumento:"", 
        tipoIdentificacao:"",
        //tipoCertificacaoEscolar:"",
        //photo: null, 
        //pdfIdentificacao:null,
        //pdfCertificacaoEscolar:null,
        //cursoId:""
    });

    const [currentStep,setCurrentStep] = useState(0)

    const handleNextStep = (newData:any) =>{
        setData(prev =>({...prev,...newData}))
        setCurrentStep(prev => prev + 1)
    }

    const handlePrevStep = (newData:any) =>{
        setData(prev =>({...prev,...newData}))
        setCurrentStep(prev => prev - 1)
    }

    const steps=[
        <StepOne next={handleNextStep} data={data} key={1}/>,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} key={2}/>
    ]
    console.log("data",data)

    return(
        <>
            {steps[currentStep]}
        </>
    )
}

interface MyComponentProps {
    next: (newData:any) =>void;
    prev?: (newData:any) =>void;
    data:any;
    setData?: (data:any) => void;
}
const StepOne:React.FC<MyComponentProps>= ({
    next,
    data
}) =>{
    const handleSubmit = (values:any) =>{
        next(values);
    }

    return(
        <Formik
        initialValues={data}
        onSubmit={handleSubmit} 
     >
        {()=>(
            <Form>
                
                <Field type="text" name="nomeCompleto" placeholder="nomeCompleto"/>
                <Field name="sexo" id="sexo" component="select">
                    <option>genero</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>    
                </Field>
                <Field
                    placeholder='Data de nascimento' 
                    type='date'
                    name="dataNasc"
                />
                <Field 
                    placeholder='O seu numero de telefone' 
                    type='number'
                    name="numeroTelefone"
                />
                <Field 
                    placeholder='O seu email' 
                    type='email'
                    name="email"
                />
                <Field name="tipoIdentificacao" id="tipoIdentificacao" component="select">
                    <option>Tipo de indetificação</option>
                    <option value="Bilhete_de_Identidade">Bilhete_de_Identidade</option>
                    <option value="Cedula_Pessoal">Cedula_Pessoal</option>
                    <option value="Passaporte_Ordinario">Passaporte_Ordinario</option>    
                </Field>
                <Field 
                    placeholder='Código do documento' 
                    type='text'
                    name="codigoDocumento"
                />
                <button type="submit">Next</button>
            </Form>
        )}
    </Formik>)
}


const StepTwo:React.FC<MyComponentProps>= ({
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
            numeroTelefone:data.numeroTelefone,
            email:data.email
        }

        const [
            photoResponse,
            identificationResponse,
            certificationResponse,
            constactResponse,
        ]=await Promise.all([
            api.post('/file', formData),
            api.post('/file', formData2),
            api.post('/file', formData3),
            api.post('/contact/post',contactData),
        ]);

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
                Router.push({pathname:"/finishResistration"})
                toast("Cadastro feito com sucesso", {autoClose: 2000, type: "success"})
            }
        }catch(err){
            const error = err as IErrorInterface
            Router.push({pathname:"/resistrationError"})
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
                <Field name="tipoCertificacaoEscolar" id="tipoCertificacaoEscolar" component="select">
                    <option>tipo de certificação escolar</option>
                    <option value="Declaracao_com_Notas">Declaracao_com_Notas</option>
                    <option value="Certificado_de_Habilitaoes">Certificado_de_Habilitaoes</option>    
                </Field>
                <Field name="cursoId" id="curso" component="select">
                    <option>curso pretendido</option>
                    <option value="Declaracao_com_Notas">Declaracao_com_Notas</option>
                    <option value="Certificado_de_Habilitaoes">Certificado_de_Habilitaoes</option>
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
            </Form>
        )}
    </Formik>)}
    

export default StudentSubscriptionTest;
