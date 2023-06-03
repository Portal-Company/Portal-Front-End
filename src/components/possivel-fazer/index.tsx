import React from "react";
import * as S from "./styles";
import Image from "next/image";
import Img from "../../../public/assets/young-beautiful-woman.jpg";

import { CiSearch, CiLocationArrow1, CiWavePulse1 } from "react-icons/ci";

const PossivelSaber: React.FC = () => {
  return (
    <S.Container>
      <S.Title>O que é possível fazer no portal?</S.Title>
      <S.Card>
        <S.ImgContainer>
          <div className="img">
            <Image src={Img} alt="IMG" width={500} height={400} />
          </div>
        </S.ImgContainer>
        <S.CardText>
          <div>
            <h2>Possibilidades e funcionalidades do portal :</h2>
          </div>
          <div>
            <div className="icon">
              <CiSearch />
            </div>
            <div>
              <h3>Pequisar escolas</h3>
              <span>
                O portal das escolas permite que você pesquise por qualquer
                escola que esteja cadastrada no sistema.
              </span>
            </div>
          </div>
          <div>
            <div className="icon">
              <CiWavePulse1 />
            </div>
            <div>
              <h3>Ver perfil de escolas</h3>
              <span>
                O portal das escolas permite que você o perfil de qualquer
                escola cadastrada no sistema.
              </span>
            </div>
          </div>
          <div>
            <div className="icon">
              <CiLocationArrow1 />
            </div>
            <div>
              <h3>Fazer Inscrição</h3>
              <span>
                O portal das escolas permite que você inscreva-se em qualquer
                escola cadastrada no sistema.
              </span>
            </div>
          </div>
        </S.CardText>
      </S.Card>
    </S.Container>
  );
};

export default PossivelSaber;
