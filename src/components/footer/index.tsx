import Image from "next/image";
import portalLogo from "../../../public/assets/portal.png";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../../public/assets/med.png";
import * as S from "./styles";

export const Footer = () => {
  return (
    <>
    <S.Container>
      <S.FooterInformations>
        <S.InfoContainer>
          <S.PortalSocialMedia>
            <Image src={portalLogo} width={290} height={90} alt="logo" />
            <p>
              lets manage your finance and business stock in detail lets manage
              your finance a business stock in detail
            </p>
            <div>
              <FaFacebook />
              <FaLinkedin />
              <FaTwitter />
              <FaInstagram />
            </div>
          </S.PortalSocialMedia>
          <S.GateMed>
            <h2>Portal MED</h2>
            <a href="">Fale Conosco</a>
            <a href="">Ajuda</a>
            <a href="">Feedback</a>
            <a href="">Politica de cookies</a>
          </S.GateMed>
          <S.Resources>
            <h2>Recursos</h2>
            <a href="">Fale Conosco</a>
            <a href="">Ajuda</a>
            <a href="">Feedback</a>
            <a href="">Politica de cookies</a>
          </S.Resources>
          <S.Suport>
            <h2>Suport</h2>
            <a href="">Fale Conosco</a>
            <a href="">Ajuda</a>
            <a href="">Feedback</a>
            <a href="">Politica de cookies</a>
          </S.Suport>
        </S.InfoContainer>
      </S.FooterInformations>
    </S.Container>
    <S.DirectoReserve>
        <Image src={logo} width={170} height={30} alt="med"/>
        <p>Todos os directo reservado</p>
      </S.DirectoReserve>
    </>
  );
};
