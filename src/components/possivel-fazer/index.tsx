import React, { useEffect } from "react";
import * as S from "./styles";
import Image from "next/image";
import Aos from "aos";
import Img from "../../../public/assets/img.png";

import M7 from "../../../public/assets/m7.jpg";
import { CiSearch, CiLocationArrow1, CiWavePulse1 } from "react-icons/ci";
import { useRouter } from "next/router";
import Button from "../button/button";
const PossivelSaber: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <S.Container>
      <S.Title>
        <h1>O que é possível fazer no portal?</h1>
      </S.Title>
      <S.Card>
        <Image
          src={Img}
          alt="IMG"
          width={600}
          height={400}
          data-aos="fade-right"
        />
        <S.CardText data-aos="fade-left">
          <div>
            <CiSearch />
            <span>Pesquisar e ver perfil de escola</span>
          </div>
          <div>
            <CiLocationArrow1 />
            <span>Fazer Inscrição a qualquer escola</span>
          </div>
          <div>
            <CiWavePulse1 />
            <span>Gerenciar e visualizar inscrições (Admin)</span>
          </div>
        </S.CardText>
      </S.Card>
    </S.Container>
  );
};

export default PossivelSaber;
