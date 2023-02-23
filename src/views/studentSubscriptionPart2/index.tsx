import { FaCheck, FaFile, FaArrowRight , FaUser } from 'react-icons/fa'
import Input from '../../components/input'
import * as S from './styles'

const StudentSubscriptionPart2=()=>{
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
                            <p>Finalizar</p> 
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
                        <Input placeholder='O sua foto' name="foto" type='file'/>
                        <Input placeholder='O sua foto' name="pdfBi" type='file'/>
                        <Input placeholder='O sua foto' name="pdfCertificado" type='file'/>
                        <Input placeholder='O sua foto' name="pdfDeclaração" type='file'/>
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

export default StudentSubscriptionPart2;
