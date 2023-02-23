import React from "react";
import { Footer } from "../footer";
import Header from "../header";

import TopHeader from "../top-header";
import * as S from "./styles";

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <TopHeader />
        <Header />
        <S.Main>{children}</S.Main>
      </S.Content>
    </S.Wrapper>
  );
};
