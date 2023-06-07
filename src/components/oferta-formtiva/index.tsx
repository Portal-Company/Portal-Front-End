import React from "react";
import * as S from "./styles";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import Button from "../button/button";
import Link from "next/link";
const OfertaFormativa: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Conheça a nossa Oferta Formativa</S.Title>
      <S.Card>
        <Image
          src="https://i.ibb.co/4VVK303/engineer-cooperation-male-female.jpg"
          alt="IMG"
          width={550}
          height={350}
        />
        <S.CardText data-aos="fade-down">
          <h2>Engenharias e Tecnologias</h2>
          <p>
            Oportunidades de carreira: Os cursos de engenharia e tecnologia
            proporcionam uma base sólida para uma variedade de carreiras em
            campos como engenharia civil, engenharia mecânica, engenharia
            elétrica, ciência da computação, tecnologia da informação, entre
            outros. Essas áreas oferecem uma demanda contínua por profissionais
            qualificados, com muitas oportunidades de emprego e crescimento
            profissional.
          </p>
          <Link href="/SearchSchool">
            <Button Icon={<CiGlobe />} textName="Ver Escolas" />
          </Link>
        </S.CardText>
      </S.Card>
      <S.Card>
        <S.CardText data-aos="zoom-in">
          <h2>Ciências Sociais Aplicadas</h2>
          <p>
            Os cursos de ciências, como biologia, química, física e ciências da
            terra, fornecem uma compreensão mais profunda dos princípios e leis
            que governam o mundo natural. Os alunos aprendem sobre os
            fundamentos da vida, matéria, energia, forças naturais e processos
            geológicos. Essa compreensão científica ajuda a explicar o
            funcionamento do mundo ao nosso redor.
          </p>
          <Link href="/SearchSchool">
            <Button Icon={<CiGlobe />} textName="Ver Escolas" />
          </Link>
        </S.CardText>
        <Image
          src="https://i.ibb.co/F7xrf9j/african-amercan.jpg"
          alt="IMG"
          width={550}
          height={350}
        />
      </S.Card>
    </S.Container>
  );
};

export default OfertaFormativa;
