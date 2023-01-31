import * as S from './styles'
import logo from '../../../public/assets/logo-angola.png';
import Image from 'next/image';

const Header=()=>{
    return(
        <S.MainContainer>
            <S.TopHeader>
                <Image src={logo} alt='med'/>
            </S.TopHeader>
        </S.MainContainer>
    )
}

export default Header;