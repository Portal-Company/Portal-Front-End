import Image from "next/image";
import React from "react";
import { Footer } from "../../components/footer";
import { useFetch } from "../../hooks/useFetch";
import { ISchoolData } from "../../types";
import * as S from "./styles";
import useSWR from "swr";
import { fetchData } from "./services";
import { Card } from "../../components/card";
import { useRouter } from "next/router";
import Router from "next/router";
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
    <>
      <S.Container>
        <S.Content>
          <S.FirstSection>
            <S.ContainerImage>
              {fotoUrl ? (
                <Image
                  src={fotoUrl?.link}
                  alt="escola"
                  width={490}
                  height={500}
                  loading="lazy"
                />
              ) : null}
            </S.ContainerImage>
            <S.ContainerLeft>
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
              <S.ContainerLeftFooter>
                <section>
                  <span>Logo: </span>
                  {logoUrl ? (
                    <Image
                      src={logoUrl?.link}
                      alt="escola"
                      width={490}
                      height={500}
                      loading="lazy"
                    />
                  ) : null}
                </section>
                <section>
                  <S.ButtonSubscribe>Inscrever-se</S.ButtonSubscribe>
                </section>
              </S.ContainerLeftFooter>
            </S.ContainerLeft>
          </S.FirstSection>
          <S.SecondSection>
            <S.SecondSectionChild1>
              <S.Title>Historial</S.Title>
              <S.SectionDescription>
                <div>
                  <span style={{ marginRight: "0.5rem" }}>
                    Fundador: {school?.historial?.fundador}
                  </span>
                </div>
                <span>Ano: {school?.historial?.data}</span>
              </S.SectionDescription>
              <S.SectionDescription>
                <span>Breve História: </span>
              </S.SectionDescription>
              <S.ContentStory>
                <S.DescriptionStory>
                  {school?.historial?.descricao}
                </S.DescriptionStory>
              </S.ContentStory>
            </S.SecondSectionChild1>
            <S.SecondSectionChild2>
              {/* <div>
                            {data?.historial1?.link ? <Image onClick={() => router.push(data.historial1?.link)} loader={() => data.historial1.link} src={data.historial1.link} width={100} height={90} alt="escola"  layout="responsive"/> : null} 
                        </div>
                        <div>
                            {data?.historial2?.link ? <Image onClick={() => router.push(data.historial2?.link)} loader={() => data.historial2.link} src={data.historial2.link} width={100} height={90} alt="escola"  layout="responsive"/> : null} 
                        </div>
                        <div> 
                            {data?.historial3?.link ? <Image onClick={() => router.push(data.historial3?.link)} loader={() => data.historial3.link} src={data.historial3.link} width={100} height={90} alt="escola" layout="responsive" /> : null} 
                        </div>
                        <div>
                            {data?.historial4?.link ? <Image onClick={() => router.push(data.historial4?.link)} loader={() => data.historial4.link} src={data.historial4.link} width={100} height={90} alt="escola" layout="responsive" /> : null} 
                        </div> */}
            </S.SecondSectionChild2>
          </S.SecondSection>
          <S.ThirdSection>
            <S.Title>Áreas de Formação</S.Title>
            <S.ContainerCard>
              {school.areaDeFormacao?.map((area) => (
                <Card
                  key={area.id}
                  content={area}
                  onClick={() =>
                    router.push(`/SearchSchool/AreaDeFormacao/${area.id}`)
                  }
                />
              ))}
            </S.ContainerCard>
          </S.ThirdSection>
          <S.FourthSection>
            <S.Title>Actividades Anuais</S.Title>
            <S.ContainerCard>
              {school?.actividade.map((activity) => (
                <Card
                  key={activity.id}
                  content={activity}
                  onClick={() =>
                    router.push(`/SearchSchool/Actividades/${activity.id}`)
                  }
                />
              ))}
            </S.ContainerCard>
          </S.FourthSection>
          <S.FifthSection>
            {school.Organigrama.Departamento.map((data) => (
              <>
                <S.Title>{data.nome}</S.Title>
                <S.ContainerCard>
                  {data.Funcionario.map((data) => (
                    <Card key={data.id} content={data} />
                  ))}
                </S.ContainerCard>
              </>
            ))}
          </S.FifthSection>
        </S.Content>
      </S.Container>
    </>
  );
};
