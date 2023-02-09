import Image from 'next/image'
import * as S from './styles'
import avatar from '../../../public/assets/ipil.jpg'

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
            </S.MainContainer>
        </S.Container>
    )
}

export default SchoolProfile