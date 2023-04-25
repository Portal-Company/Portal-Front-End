import { useState } from 'react'
import CancelModal from '../cancelModal'
import * as S from './styles'
import FormStep1 from '../../components/form-step1'
import FormStep2 from '../../components/form-step2'
import FormStep4 from '../../components/form-step4'
import Step from '../../components/step'
import { FaArrowRight } from 'react-icons/fa'
import { useSubmit } from './hooks/useSubmit'
import Input from '../../components/input'
import { ICourses } from '../../components/form-step1/type'

const StudentSubscription=()=>{
    const [step,setStep] = useState<number>(1);
    const [showModal,setShowModal]=useState<boolean>(false)
    
    const {formik,courses}=useSubmit();
    console.log(courses);
    
    //const getComponentStep=()=>{
    //    switch (step) {
    //        case 1:
    //            return <FormStep1/>;
    //        case 2:
    //            return <FormStep2/>;
    //        case 3:
    //            return <FormStep4/>;
    //        default:
    //            return <FormStep1/>;
    //    }
    //}

    return(
        <S.Container>
            <CancelModal showModal={showModal} setShowModal={setShowModal}/>
            <S.CardBackground>
                <S.CenterContent>
                    <h2>Fazer Inscrição de estudante</h2>
                    <span>Aderir</span>
                    <Step step={step}/>
                </S.CenterContent>
            </S.CardBackground>

            <div>
            <S.WrapperContainer onSubmit={formik.handleSubmit} encType="multipart/form-data">
                {
                    step===1?(
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
                </S.Forms> 
            </S.FormCard>
                    ):(
                        <S.FormCard>
                <S.Paragraph>
                    Para iniciar o processo de abertura de conta, precisamos de validar o seu nº de telemóvel.
                </S.Paragraph>
                <S.Forms>

                    <S.Select name="tipoCertificacaoEscolar" id="tipoCertificacaoEscolar" onChange={formik.handleChange}>
                        <option>tipo de certificação escolar</option>
                        <option value="Declaracao_com_Notas">Declaracao_com_Notas</option>
                        <option value="Certificado_de_Habilitaoes">Certificado_de_Habilitaoes</option>    
                    </S.Select>

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
            </S.FormCard>   
                    )
                }
                 
            <S.Footer>
                <S.BackButton onClick={()=>setShowModal(!showModal)}>
                    Cancelar
                </S.BackButton>
                <S.ForewardButton  onClick={()=>{setStep(prevState=> prevState + 1)}}>
                    <button type={step>1?'submit':'button'}>
                        <span>
                            continuar<FaArrowRight/>
                        </span>
                    </button>    
                </S.ForewardButton>
            </S.Footer>
        </S.WrapperContainer>
            </div>

        </S.Container>
    )
}

export default StudentSubscription;
