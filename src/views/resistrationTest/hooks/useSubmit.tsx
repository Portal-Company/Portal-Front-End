import { useFormik } from "formik";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { IErrorInterface } from "../../../components/form-step1/type";
import { api, getCoursesSchool } from "../../../services";
import { ICandidate, IContact, Values } from "../type";
import useSWR from "swr"
import Router from "next/router"

export const useSubmit=()=>{
    
    const {
        query:{escolaId}
    }=useRouter();

    const {data:courses,error:coursesError}=useSWR("courses",()=>getCoursesSchool(escolaId));
    

    const formik = useFormik<Values>({
        initialValues: {
            nomeCompleto:"",
            sexo:"",
            dataNasc:"",
            numeroTelefone:"",
            email:"",
            tipoIdentificacao:"",
            tipoCertificacaoEscolar:"",
            codigoDocumento:"", 
            photo: null, 
            pdfIdentificacao:null,
            pdfCertificacaoEscolar:null,
            cursoId:"",
        },
        onSubmit: async (values) => {
            const formData = new FormData();
            const formData2 = new FormData();
            const formData3 = new FormData();

            formData.append('file', values.photo[0]);
            formData2.append('file', values.pdfIdentificacao[0]);
            formData3.append('file', values.pdfCertificacaoEscolar[0]);

            const contactData:IContact={
                numeroTelefone:values.numeroTelefone,
                email:values.email
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
                nome: values.nomeCompleto,
                sexo:values.sexo,
                dataNasc:values.dataNasc,
                contatoId:constactResponse.data.id,
                photoUrl:photoResponse.data.id,
                tipoIdentificacao:values.tipoIdentificacao,
                codigoDocumento:values.codigoDocumento,
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
        },
    });
   return {formik,courses};
}
