import { useFormik } from "formik";
import * as yup from "yup";

interface Values {
    nomeCompleto:string;
    sexo:string;
    dataNasc:string;
    numeroTelefone:string;
    email:string;
    tipoIdentificacao:string;
    codigoDocumento:string;
}

export const useStep1 = () => {
    const recordData = (data:Values) => {
        console.log(data);
    }

    const formik = useFormik({
        initialValues: {
            nomeCompleto:"",
            sexo:"",
            dataNasc:"",
            numeroTelefone:"",
            email:"",
            tipoIdentificacao:"",
            codigoDocumento:"", 
        },
        validationSchema: yup.object({
            nomeCompleto: yup.string().min(8,"o nome completo deve ter pelo menos 8 caracteres").required("o nome completo é obrigatório"),
            sexo: yup.string().min(1,"selecione o campo").required("O sexo é obrigatório"),
            dataNasc: yup.string().min(1,"selecione o campo").required("a data de nascimento é obrigatório"),
            numeroTelefone: yup.string()
            .matches(/^\9[1-9]\d{7}$/, 'Por favor, digite um número de telefone válido de Angola').required("número de telefone é obrigatório"),
            email: yup.string().email("digite um email valido").required("O email é obrigatorio"),
            tipoIdentificacao:yup.string().min(1,"o campo é obrigatório").required(),
            codigoDocumento:yup.string().min(5,"degite um código de documento válido").required()
          }),
        onSubmit: data => {
            
        },
    });
   return {formik};
}