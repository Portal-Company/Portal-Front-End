import { FaCheck, FaFile, FaArrowRight , FaUser } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import Input from '../../components/input'
import * as S from './styles'

const StudentSubscriptionPart4=()=>{
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
            <S.WrapperContainer>
                <S.FormCard>
                    <S.Paragraph>
                        Parabéns você terminou de preencher o formulário 
                        de inscrição online no portal das escolas! desejámos-lhe boa sorte!
                    </S.Paragraph>
                    <S.Forms>
                        <div>
                            <FaCheck/>
                        </div>
                    </S.Forms>
                </S.FormCard>
            </S.WrapperContainer>
        </S.Container>
    )
}

export default StudentSubscriptionPart4;
