import { FaCheck, FaFile, FaArrowRight , FaUser } from 'react-icons/fa'
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
                            <p>Pessoal</p>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <FaCheck/>
                                </div>
                            </div>
                            <p>Pessoal</p> 
                        </div>
                    </S.IconsContainer>
                </S.CenterContent>
            </S.CardBackground>
            <S.WrapperContainer>
                <S.FormCard>
                    <S.Paragraph>
                        Para iniciar o processo de abertura de conta, precisamos de validar o seu nº de telemóvel.
                    </S.Paragraph>
                    <S.Forms>
                        <Input placeholder='O seu Nome' type='text'/>
                        <Input placeholder='O seu Email' type='email'/>
                    </S.Forms>
                </S.FormCard>
            </S.WrapperContainer>
            <S.Footer>
                <S.BackButton>
                    Cancelar
                </S.BackButton>
                <S.ForewardButton>
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
