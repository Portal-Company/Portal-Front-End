import * as S from "./styles";
import Image from "next/image";
import logoportal from "../../../public/assets/portal.png";

import Button from "../button/button";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <S.MainContainer>
      <S.Content>
        <Image src={logoportal} width={180} height={60} alt="appLogo" />
        <S.ContentLeft>
          <S.Menu>
            <li>
              <a
                href="#"
                className={currentRoute === "/" ? "active" : "non-active"}
              >
                Inicio
              </a>
            </li>
            <li>
              <a href="#">Escolas</a>
            </li>
          </S.Menu>
          {/* <Button Icon={<FaRegUser />} textName="Entrar" /> */}
        </S.ContentLeft>
      </S.Content>
    </S.MainContainer>
  );
};

export default Header;
