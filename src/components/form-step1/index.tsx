import * as S from './styles'
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
                <S.FormCard>
                    <S.Paragraph>
                        Para iniciar o processo de abertura de conta, precisamos de validar o seu nº de telemóvel.
                    </S.Paragraph>
                    <S.FormContainer>
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
                        <button type="submit">Continuar</button>
                    </S.FormContainer>
                </S.FormCard>
            </Form>
        )}
    </Formik>)
}
