import { useState } from 'react'
import CancelModal from '../cancelModal'
import * as S from './styles'
import FormStep1 from '../../components/form-step1'
import FormStep2 from '../../components/form-step2'
import FormStep3 from '../../components/form-step3'
import FormStep4 from '../../components/form-step4'
import Step from '../../components/step'
import { FaArrowRight } from 'react-icons/fa'

const StudentSubscription=()=>{
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
                    <Step step={step}/>
                </S.CenterContent>
            </S.CardBackground>

            <div>
                {getComponentStep()}
            </div>

            <S.Footer>
                <S.BackButton onClick={()=>setShowModal(!showModal)}>
                    Cancelar
                </S.BackButton>
                <S.ForewardButton onClick={()=>{setStep(prevState => prevState+1)}}>
                        Continuar 
                    <span>
                        <FaArrowRight/>
                    </span>
                </S.ForewardButton>
            </S.Footer>
        </S.Container>
    )
}

export default StudentSubscription;
