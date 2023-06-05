import React, { useEffect } from "react";
import * as S from "./styles";

const PossivelSaber: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h2>Subscreva-se para receber actualizações</h2>
        <S.InputContainer>
          <S.Input placeholder="Intruduz o seu email" />
          <S.Button>Enviar</S.Button>
        </S.InputContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default PossivelSaber;
