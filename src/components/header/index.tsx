import * as S from "./styles";
import Image from "next/image";
import logoportal from "../../../public/assets/portal.png";
import { useRouter } from "next/router";
import {FaBars} from 'react-icons/fa'
import {useState} from 'react'
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [showMenu,setShowMenu]=useState<boolean>(false);
  return (
    <S.Wrapper>
      <S.MainContainer>
        <S.Content>
          <Image src={logoportal} width={180} height={60} alt="appLogo" />
          <S.ContentLeft>
            <S.Menu className="navbar">
              <li>
                <a
                  href="#"
                  className={currentRoute === "/" ? "active" : "non-active"}
                >
                  Inicio
                </a>
              </li>
              <li>
                <Link href={"/SearchSchool"}>
                  Escolas
                </Link>
              </li>
            </S.Menu>
            <S.MenuMobile onClick={()=>setShowMenu(!showMenu)}>
              <div className="bars">
                <span>
                  <FaBars/>
                </span>
              </div>
            </S.MenuMobile>
          </S.ContentLeft>
        </S.Content>
      </S.MainContainer>
      <S.MenuBar showMenu={showMenu}>
        <li>
          <a
            href="#"
            className={currentRoute === "/" ? "active" : "non-active"}
          >
            Inicio
          </a>
        </li>
        <li><a href="#">Escolas</a></li>
        <li><a href="#">Inscrever/se</a></li>
      </S.MenuBar>
    </S.Wrapper>
  );
};

export default Header;
