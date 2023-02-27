import Link from 'next/link'
import { useState } from 'react'
import { FaCheck, FaFile, FaArrowRight , FaUser } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import Input from '../../components/input'
import CancelModal from '../cancelModal'
import * as S from './styles'

const StudentSubscriptionPart2=()=>{
    
    const [showModal,setShowModal]=useState<boolean>(false)
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
            
            <S.Footer>
                <S.BackButton onClick={()=>setShowModal(!showModal)}>
                    Cancelar
                </S.BackButton>
                <S.ForewardButton>
                    <Link href={"/inscricao-parte3"}>
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

export default StudentSubscriptionPart2;
