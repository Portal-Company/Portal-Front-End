import Image from "next/image";
import * as S from "./styles";
import avatar from "../../../public/assets/ipil2.jpg";
import { FaEnvelope } from "react-icons/fa";
import ilustration from "../../../public/assets/m4.jpg";

import { useFetch } from "../../hooks/useFetch";
import { ISchoolData } from "../../types";
import useSWR from "swr";
import { fetchData } from "./services";
import { Card } from "../../components/card";
import { useRouter } from "next/router";
import Router from "next/router";

import logo from "../../../public/assets/med.png";

interface Props {
  school: ISchoolData;
}

export const SchoolProfileView: React.FC<Props> = ({ school }) => {
  const {
    query: { id },
  } = useRouter();

  const handleRedirect = () => {
    Router.push({
      pathname: "/inscricao",
      query: { escolaId: id },
    });
  };

  // const { data, error} = useSWR('/file/', () => fetchData(school))
  const { data: fotoUrl } = useFetch(`/file/${school?.fotoUrl}`);
  const { data: logoUrl } = useFetch(`/file/${school?.logo}`);

  const router = useRouter();

  return (
    <S.Container>
      <S.CardBackground backgroundCapa={fotoUrl?.link}>
        <S.Opacity>
          <div>
            <h2>MED</h2>
          </div>
          <S.ButtonSubscribe onClick={() => handleRedirect()}>
            Inscrever-se
          </S.ButtonSubscribe>
        </S.Opacity>
      </S.CardBackground>
      <S.MainContainer>
        <S.MenuContainer>
          <S.UserSide>
            <div>
              {logoUrl ? (
                <Image
                  src={logoUrl?.link}
                  alt="escola"
                  width={82}
                  height={80}
                  loading="lazy"
                />
              ) : null}
            </div>
            <S.SchoolName>
              <S.Title>{school?.nome}</S.Title>
              <S.SectionDescription>
                <span>Localização: </span>
                <span>
                  {" "}
                  {school?.Localizacao?.endereco1} /{" "}
                  {school?.Localizacao?.Provincia.nome}
                </span>
              </S.SectionDescription>
              <S.SectionDescription>
                <span>Categoria: {school?.Categoria?.nome}</span>
              </S.SectionDescription>
            </S.SchoolName>
          </S.UserSide>
          <S.Nav>
            <li>
              <a href="" className="active">
                Perfil
              </a>
            </li>
            <li>
              <a href="">Historial</a>
            </li>
            <li>
              <a href="">Actividades Anuais</a>
            </li>
            <li>
              <a href="">Vídeos</a>
            </li>
          </S.Nav>
        </S.MenuContainer>
        <S.Wrapper>
          <S.LeftSide>
            <S.LittleCard>
              <div>
                <h2>Áreas de Formação</h2>
              </div>
              <S.Noticia>
                <span>
                  <FaEnvelope />
                </span>
                <p>
                  there is a meetup in your city on fryday at 19:00.{" "}
                  <a href="">see details</a>
                </p>
              </S.Noticia>
              <S.Noticia>
                <span>
                  <FaEnvelope />
                </span>
                <p>20% off coupon on selected items at pharmaprix</p>
              </S.Noticia>
            </S.LittleCard>
            <S.LittleCard>
              <div>
                <h2>Áreas de Formação</h2>
              </div>
              <S.Noticia>
                <span>
                  <FaEnvelope />
                </span>
                <p>
                  there is a meetup in your city on fryday at 19:00.{" "}
                  <a href="">see details</a>
                </p>
              </S.Noticia>
              <S.Noticia>
                <span>
                  <FaEnvelope />
                </span>
                <p>20% off coupon on selected items at pharmaprix</p>
              </S.Noticia>
            </S.LittleCard>
          </S.LeftSide>
        </S.Wrapper>
      </S.MainContainer>
    </S.Container>
  );
};
