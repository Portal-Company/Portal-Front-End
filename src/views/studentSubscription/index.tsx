import { FaCheck, FaLock, FaPen } from 'react-icons/fa'
import Input from '../../components/input'
import * as S from './styles'

const StudentSubscription=()=>{
    return(
        <S.Container>
             <S.CardBackground>
                <div>
                    <h2>Bem vindo/a ao meu perfil</h2>
                    <p>Experience a simple yet powerful way to build Dashboards with Qompac UI</p>           
                </div>
            </S.CardBackground>
            <S.FormCard>
                    <div>
                        <h2>Inscrição</h2>
                    </div>
                    <S.CardsContainer>
                        <S.Card>
                            <div>
                                <FaLock/>
                            </div>
                            <span>Account</span>
                        </S.Card>
                        <S.Card>
                            <div>
                                <FaLock/>
                            </div>
                            <span>Account</span>
                        </S.Card>
                        <S.Card>
                            <div>
                                <FaLock/>
                            </div>
                            <span>Account</span>
                        </S.Card>
                        <S.Card>
                            <div>
                                <FaCheck/>
                            </div>
                            <span>Finish</span>
                        </S.Card>
                    </S.CardsContainer>
                    <S.StepContainer>
                        <h3>Account Information:</h3>
                        <h2>Step 1-4</h2>
                    </S.StepContainer>
                    <S.FieldContainer>
                        <S.Field>
                            <label htmlFor="">Nome:</label>
                            <Input type='text' placeholder='informe o seu nome'/>
                        </S.Field>
                        <S.Field>
                            <label htmlFor="">Email:</label>
                            <Input type='email' placeholder='informe o seu email'/>
                        </S.Field>
                        <S.Field>
                            <label htmlFor="">Nome:</label>
                            <Input type='text' placeholder='informe o seu nome'/>
                        </S.Field>
                        <S.Field>
                            <label htmlFor="">Email:</label>
                            <Input type='email' placeholder='informe o seu email'/>
                        </S.Field>
                    </S.FieldContainer>
                    <S.Button color='#fff' backgroundColor='#1C9DEA'>Next</S.Button>
            </S.FormCard>
        </S.Container>
    )
}

export default StudentSubscription