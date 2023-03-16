import * as S from './styles'
import Input from "../input"
import { api } from '../../services/api'
import { useFormik } from 'formik';
import { ICandidate, IContact } from '../../views/studentSubscription/type'
import { useRouter } from 'next/router'; 
import { getCoursesSchool } from '../../services';
import { toast } from 'react-toastify';
import { ICourses, IErrorInterface } from './type';
import { useSubmit } from '../../views/studentSubscription/hooks/useSubmit';

const FormStep1=()=>{
    
    const {formik,courses}=useSubmit();
    console.log(courses);
    
    return(
        <S.WrapperContainer>
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

                    <S.Select name="tipoCertificacaoEscolar" id="tipoCertificacaoEscolar" onChange={formik.handleChange}>
                        <option>tipo de certificação escolar</option>
                        <option value="Declaracao_com_Notas">Declaracao_com_Notas</option>
                        <option value="Certificado_de_Habilitaoes">Certificado_de_Habilitaoes</option>    
                    </S.Select>

                    <Input 
                        placeholder='Código do documento' 
                        type='text'
                        name="codigoDocumento"
                        onChange={formik.handleChange}
                    />

                     <S.Select name="cursoId" id="tipoCertificacaoEscolar" onChange={formik.handleChange}>
                        <option>curso pretendido</option>
                        {courses?.map((item:ICourses,index:number)=>(
                            <option value={item?.id} key={index}>{item?.nome}</option>
    
                        ))}
                    </S.Select>

                    <input
                        type="file"
                        name="photo"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        formik.setFieldValue('photo', event.currentTarget.files);
                        }}
                    />
                    <input
                        type="file"
                        name="pdfIdentificacao"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        formik.setFieldValue('pdfIdentificacao', event.currentTarget.files);
                        }}
                    />
                    <input
                        type="file"
                        name="pdfCertificacaoEscolar"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        formik.setFieldValue('pdfCertificacaoEscolar', event.currentTarget.files);
                        }}
                    />
                
                </S.Forms>
                <button type="submit">Continuar</button> 
            </S.FormCard>
        </S.WrapperContainer>       
    )
}
export default FormStep1;
