import { useFormik } from "formik";
import { toast } from "react-toastify";
import { postFetchBiPdf, postFetchCandidate, postFetchCertificatePdf, postFetchContact, postFetchPhoto } from "../services";
import { ICandidate, IContact, IError } from "../type";

export const useValidateData = () => {
    const candidateResistration= async (data:ICandidate) => {
        try{
          //  const contactData:IContact={
            //    numeroTelefone:data.numeroTelefone,
            //    email:data.email
            //}
        
            //const contact = await postFetchContact(contactData);
            const photo = await postFetchPhoto(data.photoUrl[0]);
            //const bi = await postFetchBiPdf(data.pdfBi);  
            //const certificate = await postFetchCertificatePdf(data.pdfCertificado);
            //const declaration = await postFetchPhoto(data.pdfDeclaracao);  

            //const candidate = await postFetchCandidate(data);
            //if(candidate) toast("candidato cadastrado com sucesso", {autoClose:2000, type:"success"}); 
        } catch(err){
            const error=err as IError
            toast(error.response?.data?.error, {autoClose:2000,type:"error"});
        }
    } 

    const formik = useFormik({
        initialValues:{
            nomeCompleto: "",
            generoId: "",
            dataNasc: "",
            numeroBi: "",
            numeroTelefone: "",
            email:"",
            pdfBi: "",
            pdfCertificado: "",
            pdfDeclaracao: "",
            photoUrl: null,
            descricao: "",
        },
        onSubmit: data => {
            candidateResistration(data);
        }
    })
    return{
        formik
    }
}