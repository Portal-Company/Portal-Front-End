import * as S from "./styles";
import SchoolCard from "../schoolCard";
import Slider from "react-slick";
import { settings } from "./configuration-slick";
import React, { useEffect } from "react";
import { ISchoolData } from "../../types";
import { IFile } from "../../services/type";

interface Props {
  data: ISchoolData[];
}

const ShoolCardsContainer: React.FC<Props> = ({ data }) => {

  console.log(data);
  return (
    <S.Container>
      {data.map(({ logo, nome, Categoria, id }: ISchoolData) => {
        return (
          <SchoolCard
            id = {id}
            key={id}
            image={logo}
            name={nome}
            description={Categoria.nome}
          />
        );
      })}
    </S.Container>
  );
};


export default ShoolCardsContainer;
