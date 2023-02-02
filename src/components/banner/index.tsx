import * as S from './styles'
import estudantes from '../../../public/assets/students.png';
import Image from 'next/image';

const Banner=()=>{
    return(
        <S.Container>
            <S.TitleInformation>
                Inscreva-se na melhor escola para a garantia do seu futuro
            </S.TitleInformation>
            <S.Description>
                vamos providenciar o seu futuro com a melhor escola
            </S.Description>
            <S.ButtonsContainer>
                <S.Button  color='#fff' backgroundColor='#1C9DEA'>Inscrever-se</S.Button>
                <S.Button color='#fff' backgroundColor='#161D2B'>Cadastrar</S.Button>
            </S.ButtonsContainer>
            <S.ImageContainer>
                <Image src={estudantes} alt='estudantes'/>
            </S.ImageContainer>
        </S.Container>
    )
}
export default Banner;