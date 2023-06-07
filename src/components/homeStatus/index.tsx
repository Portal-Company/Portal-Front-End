import React from "react";
import * as S from "./styles";

import Image from "next/image";

const HomeStatus: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.TextContainer>
          <h1>CONSULTAR INSCRIÇÃO</h1>

          <p>Já podes consultar a sua inscrição com um Cick</p>
          <button type="submit">CONSULTAR</button>
        </S.TextContainer>
        <S.ImagemContainer>
          <Image src="/assets/Imagem1.png" alt="IMG" width={600} height={550} />
        </S.ImagemContainer>
      </S.Content>
    </S.Container>
  );
};

export default HomeStatus;
