import Image from 'next/image';
import * as S from './styles';
import { SchoolCardProps } from './type';

const SchoolCard=({image,name,description}:SchoolCardProps)=>{
    return(
        <S.Container>
            <S.ImageContainer>
                <Image width={150} height={100} src={image} alt='school'/>
            </S.ImageContainer>
            <S.Title>{name}</S.Title>
            <S.Paragraph>{description}</S.Paragraph>
            <S.Button>Ver perfil</S.Button>
        </S.Container>
    )
}

export default SchoolCard;