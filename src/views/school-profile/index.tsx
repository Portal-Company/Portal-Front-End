import Image from 'next/image'
import * as S from './styles'
import avatar from '../../../public/assets/ipil.jpg'
import { FaEnvelope } from 'react-icons/fa'
import ilustration from '../../../public/assets/m4.jpg'

const SchoolProfile=()=>{
    return(
        <S.Container>
            <S.CardBackground>
                <div>
                    <h2>Bem vindo/a ao meu perfil</h2>
                    <p>Experience a simple yet powerful way to build Dashboards with Qompac UI</p>           
                </div>
                <button></button>
            </S.CardBackground>
            <S.MainContainer>
                <S.MenuContainer>
                    <S.UserSide>
                        <div><Image src={avatar} width={50} height={50} alt='user'/></div>
                        <S.SchoolName>
                            <h2>IPIL</h2>
                            <span>-Instituto Médio Industrial de Luanda</span>
                        </S.SchoolName>
                    </S.UserSide>
                    <S.Nav>
                        <li><a href="" className='active'>Feed</a></li>
                        <li><a href="">Actividades</a></li>
                        <li><a href="">Fiflhiais</a></li>
                        <li><a href="">Perfil</a></li>
                    </S.Nav>
                </S.MenuContainer>
                <S.Wrapper>
                    <S.LeftSide>
                        <S.LittleCard>
                            <div>
                                <h2>Noticias</h2>
                            </div>
                            <S.Noticia>
                                <span><FaEnvelope/></span>
                                <p>there is a meetup in your city on fryday at 19:00. <a href="">see details</a></p>
                            </S.Noticia>
                            <S.Noticia>
                                <span><FaEnvelope/></span>
                                <p>20% off coupon on selected items at pharmaprix</p>
                            </S.Noticia>
                        </S.LittleCard>
                        <S.LittleCard>
                            <div>
                                <h2>Noticias</h2>
                            </div>
                            <S.Noticia>
                                <span><FaEnvelope/></span>
                                <p>there is a meetup in your city on fryday at 19:00. see details</p>
                            </S.Noticia>
                            <S.Noticia>
                                <span><FaEnvelope/></span>
                                <p>20% off coupon on selected items at pharmaprix</p>
                            </S.Noticia>
                        </S.LittleCard>
                    </S.LeftSide>
                    <S.CenterSide>
                        <S.Item>
                            <S.UserInfo>
                                <S.Avatar>
                                    <Image src={avatar} width={50} height={50} alt='user' />
                                </S.Avatar>
                                <div>
                                    <h4>IPIL</h4>
                                    <span>Administrador</span>
                                </div>
                            </S.UserInfo>
                            <S.Publication>
                                <Image src={ilustration} alt='people'/>
                            </S.Publication>
                        </S.Item>
                        <S.Item>
                            <S.UserInfo>
                                <S.Avatar>
                                    <Image src={avatar} width={50} height={50} alt='user' />
                                </S.Avatar>
                                <div>
                                    <h4>IPIL</h4>
                                    <span>Administrador</span>
                                </div>
                            </S.UserInfo>
                            <S.Publication>
                                <Image src={ilustration} alt='people'/>
                            </S.Publication>
                        </S.Item>
                    </S.CenterSide>
                    <S.RightSide>
                    <S.LittleCard>
                            <div>
                                <h2>Noticias</h2>
                            </div>
                            <S.Noticia>
                                <span><FaEnvelope/></span>
                                <p>there is a meetup in your city on fryday at 19:00. see details</p>
                            </S.Noticia>
                            <S.Noticia>
                                <span><FaEnvelope/></span>
                                <p>20% off coupon on selected items at pharmaprix</p>
                            </S.Noticia>
                        </S.LittleCard>
                        <S.LittleCard>
                            <div>
                                <h2>Noticias</h2>
                            </div>
                            <S.Noticia>
                                <span><FaEnvelope/></span>
                                <p>there is a meetup in your city on fryday at 19:00. see details</p>
                            </S.Noticia>
                            <S.Noticia>
                                <span><FaEnvelope/></span>
                                <p>20% off coupon on selected items at pharmaprix</p>
                            </S.Noticia>
                        </S.LittleCard>    
                    </S.RightSide>
                </S.Wrapper>
            </S.MainContainer>
        </S.Container>
    )
}

export default SchoolProfile