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
    Aos.init({ duration: 800 });
  });
  return (
    <S.Container>
      <h1>Hello</h1>
    </S.Container>
  );
};

export default PossivelSaber;
