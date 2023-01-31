import * as S from './styles'
import Image from 'next/image';
import logoportal from '../../../public/assets/portal.png';
import logo from '../../../public/assets/logo-angola.png';
import Button from '../button/button';
const Header=()=>{
    return(
        <S.MainContainer>
            <S.TopHeader>
                <Image src={logo} width={180} height={50} alt='med'/>
            </S.TopHeader>

            <S.BottomHeader>
                <Image src={logoportal} width={180} height={70} alt='appLogo'/>
            </S.BottomHeader>
        </S.MainContainer>
    )
}

export default Header;