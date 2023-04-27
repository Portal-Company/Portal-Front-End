import { useState } from 'react'
import * as S from './style'
import Step from '../../components/step'
import FormError from '../../components/form-error';

const ViewResistrationError=()=>{
    const [step,setStep] = useState<number>(2);    
  
    return(
        <S.Container>
            <S.CardBackground>
                <S.CenterContent>
                    <h2>Fazer Inscrição de estudante</h2>
                    <span>Aderir</span>
                    <Step step={step}/>
                </S.CenterContent>
            </S.CardBackground>
            <FormError/>
        </S.Container>
    )
}

export default ViewResistrationError;
