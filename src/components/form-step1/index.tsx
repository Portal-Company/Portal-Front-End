import * as S from './styles'
import Input from "../input"
import { useSubmit } from '../../views/studentSubscription/hooks/useSubmit';
import { MyComponentProps, Values, ValuesR } from '../../views/resistrationTest/type';
import { Formik,Field,Form } from 'formik';


export const StepOne:React.FC<MyComponentProps>= ({
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


/*interface MyComponentProps {
    handleNextStep: (newData:Values) =>void;
    data:Values;
}



const FormStep1:React.FC<MyComponentProps>=({handleNextStep , data})=>{
    
    const {formik,courses}=useSubmit();
    
    const handleSubmit = (values:Values) =>{
        console.log(values)
        //handleNextStep(values);
    }   

    return(
        <Formik
           initialValues={data}
           onSubmit={handleSubmit} 
        >
            <S.FormCard>
                    <S.Paragraph>
                        Para iniciar o processo de abertura de conta, precisamos de validar o seu nº de telemóvel.
                    </S.Paragraph>
                    <S.Forms>
                        <Input 
                            placeholder='O seu Nome Completo'
                            name="nomeCompleto"
                            onChange={formik.handleChange} 
                            type='text'
                        />

                        <S.Select name="sexo" id="sexo" onChange={formik.handleChange}>
                            <option>genero</option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>    
                        </S.Select>

                        <Input 
                            placeholder='Data de nascimento' 
                            type='date'
                            name="dataNasc"
                            onChange={formik.handleChange}
                        />

                        <Input 
                            placeholder='O seu numero de telefone' 
                            type='text'
                            name="numeroTelefone"
                            onChange={formik.handleChange}
                        />

                        <Input 
                            placeholder='O seu email' 
                            type='email'
                            name="email"
                            onChange={formik.handleChange}
                        />

                        <S.Select name="tipoIdentificacao" id="tipoIdentificacao" onChange={formik.handleChange}>
                            <option>Tipo de indetificação</option>
                            <option value="Bilhete_de_Identidade">Bilhete_de_Identidade</option>
                            <option value="Cedula_Pessoal">Cedula_Pessoal</option>
                            <option value="Passaporte_Ordinario">Passaporte_Ordinario</option>    
                        </S.Select>

                        <Input 
                            placeholder='Código do documento' 
                            type='text'
                            name="codigoDocumento"
                            onChange={formik.handleChange}
                        />
                        <button type='submit'>avançar</button>
                    </S.Forms> 
                </S.FormCard>    
        </Formik>
        )
}
export default FormStep1;
*/