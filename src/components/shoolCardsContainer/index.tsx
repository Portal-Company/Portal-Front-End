import * as S from "./styles";
import { cardMock } from "./cardMock";
import SchoolCard from "../schoolCard";
import Slider from "react-slick";
import { settings } from "./configuration-slick";

const ShoolCardsContainer = () => {
  return (
    <S.Container>
      {cardMock.map(({ image, name, description }, index) => {
        return (
          <SchoolCard
            key={index}
            image={image}
            name={name}
            description={description}
          />
        );
      })}
    </S.Container>
  );
};

export default ShoolCardsContainer;
