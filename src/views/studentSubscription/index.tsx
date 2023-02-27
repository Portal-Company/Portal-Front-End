import Link from 'next/link'
import { useState } from 'react'
import { FaCheck, FaFile, FaArrowRight , FaUser } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import CancelModal from '../cancelModal'
import * as S from './styles'
import FormStep1 from '../../components/form-step1'
import FormStep2 from '../../components/form-step2'
import FormStep3 from '../../components/form-step3'
import FormStep4 from '../../components/form-step4'

const StudentSubscription=()=>{
    const steps=[1,2,3,4];
    const [step,setStep] = useState<number>(1);
    const [showModal,setShowModal]=useState<boolean>(false)

    const getComponentStep=()=>{
        switch (step) {
            case 1:
                return <FormStep1/>;
            case 2:
                return <FormStep2/>;
            case 3:
                return <FormStep3/>;
            case 4:
                return <FormStep4/>;
            default:
                return <FormStep1/>;
        }
    }

    return(
        <S.Container>
            <CancelModal showModal={showModal} setShowModal={setShowModal}/>
             <S.CardBackground>
                <S.CenterContent>
                    <h2>Fazer Inscrição de estudante</h2>
                    <span>Aderir</span>
                    <S.IconsContainer>
                        <div>
                            <div>
                                <div>
                                    <FaUser/>
                                </div>
                                -----------------
                            </div>
                            <p>Pessoal</p>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <FaFile/>
                                </div>
                                -----------------
                            </div>
                            <p>Documentos</p>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <HiLocationMarker/>
                                </div>
                                -----------------
                            </div>
                            <p>Localização</p>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <FaCheck/>
                                </div>
                            </div>
                            <p>Finalizar</p> 
                        </div>
                    </S.IconsContainer>
                </S.CenterContent>
            </S.CardBackground>

            <div>
                {getComponentStep()}
            </div>

            <S.Footer>
                <S.BackButton onClick={()=>setShowModal(!showModal)}>
                    Cancelar
                </S.BackButton>
                <S.ForewardButton>
                    <Link href={"/inscricao-parte2"}>
                        Continuar 
                    </Link> 
                    <span>
                        <FaArrowRight/>
                    </span>
                </S.ForewardButton>
            </S.Footer>
        </S.Container>
    )
}

export default StudentSubscription;
