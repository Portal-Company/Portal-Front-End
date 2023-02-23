import { FaCheck, FaLock, FaPen, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import Input from '../../components/input'
import * as S from './styles'
const StudentSubscription=()=>{
    return(
        <S.Container>
             <S.CardBackground>
                <S.CenterContent>
                    <h2>Fazer Inscrição de estudante</h2>
                    <span>Aderir</span>
                    <S.IconsContainer>
                        <div>
                            <div>
                                <FaPhone/>
                            </div>
                            -----------------
                        </div>
                        <div>
                            <div>
                                <FaPhone/>
                            </div>
                            -----------------
                        </div>
                        <div>
                            <div>
                                <FaPhone/>
                            </div>
                            -----------------
                        </div>
                        <div>
                            <div>
                                <FaPhone/>
                            </div>
                        </div>
                    </S.IconsContainer>
                </S.CenterContent>
            </S.CardBackground>
            <S.WrapperContainer>
                <S.FormCard>
                        
                        <S.CardsContainer>
                            
                        </S.CardsContainer>
                        <S.FieldContainer>
                            <S.Field>
                                <label htmlFor="">Nome:</label>
                                <Input type='text' placeholder='informe o seu nome'/>
                            </S.Field>
                        </S.FieldContainer>
                        <S.Button color='#fff' backgroundColor='#1C9DEA'>Next</S.Button>
                </S.FormCard>
            </S.WrapperContainer>
        </S.Container>
    )
}

export default StudentSubscription;
