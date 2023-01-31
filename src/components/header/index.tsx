import * as S from './styles'
import Image from 'next/image';
import logoportal from '../../../public/assets/portal.png';
import logo from '../../../public/assets/logo-angola.png';
import Button from '../button/button';
import {FaRegUser} from 'react-icons/fa'

const Header=()=>{
    return(
        <S.MainContainer>
            <S.TopHeader>
                <Image src={logo} width={180} height={50} alt='med'/>
            </S.TopHeader>

            <S.BottomHeader>
                <Image src={logoportal} width={180} height={70} alt='appLogo'/>
                <S.Menu>
                    <li>
                        <a href="#">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Escolas
                        </a>
                    </li>     
                    <Button Icon={<FaRegUser/>} textName='Entrar'/>
                </S.Menu>
            </S.BottomHeader>
        </S.MainContainer>
    )
}

export default Header;