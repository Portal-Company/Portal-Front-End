import React, { useEffect } from "react";
import * as S from "./styles";
import Image from "next/image";
import Aos from "aos";
import M6 from "../../../public/assets/m6.jpg";

import M7 from "../../../public/assets/m7.jpg";
import { SiMattermost } from "react-icons/si";
import { useRouter } from "next/router";
import Button from "../button/button";
const ofertaFormativa = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <S.Container>
      <S.Title>
        <h1>Conheça a nossa Oferta Formativa</h1>
      </S.Title>
      <S.Card>
        <Image
          src={M6}
          alt="IMG"
          width={600}
          height={400}
          data-aos="fade-right"
        />
        <S.CardText data-aos="fade-left">
          <h2>Engenharias e Tecnologias</h2>
          <Button Icon={<SiMattermost />} textName="Ver Escolas" />
        </S.CardText>
      </S.Card>
      <S.Card>
        <S.CardText>
          <h2>Ciências Sociais Aplicadas</h2>
          <Button Icon={<SiMattermost />} textName="Ver Escolas" />
        </S.CardText>
        <Image src={M7} alt="IMG" width={600} height={400} />
      </S.Card>
    </S.Container>
  );
};

export default ofertaFormativa;
