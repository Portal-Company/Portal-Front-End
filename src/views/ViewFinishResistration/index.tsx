import { useState } from 'react'
import * as S from './style'
import Step from '../../components/step'
import FormStep4 from '../../components/form-step4';

const ViewFinishResistration=()=>{
    const [step,setStep] = useState<number>(3);    
  
    return(
        <S.Container>
            <S.CardBackground>
                <S.CenterContent>
                    <h2>Fazer Inscrição de estudante</h2>
                    <span>Aderir</span>
                    <Step step={step}/>
                </S.CenterContent>
            </S.CardBackground>
            <FormStep4/>
        </S.Container>
    )
}

export default ViewFinishResistration;
