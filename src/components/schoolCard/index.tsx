import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";
import { SchoolCardProps } from "./type";
import {useRouter} from "next/router"
const SchoolCard = ({ image, name, description, id }: SchoolCardProps) => {
  const router = useRouter()
  return (
    <S.Container>
      <S.ImageContainer>
        <Image width={100} height={76} src={image} alt="school" />
      </S.ImageContainer>
      <S.Title>{name}</S.Title>
      <S.Paragraph>{description}</S.Paragraph>
      <S.Button onClick={() => router.push(`/SearchSchool/${id}`)}>
        Ver perfil
      </S.Button>
    </S.Container>
  );
};

export default SchoolCard;
