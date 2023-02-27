import Image from "next/image";
import React from "react";
import { Footer } from "../../components/footer";
import { ISchoolData } from "../../types";
import * as S from "./styles"

interface Props {
    school: ISchoolData;
}

export const SchoolProfileView: React.FC<Props> = ({ school }) =>{

    console.log(school);
    return(
        <>
        <S.Container>
            <S.Content>
                <S.FirstSection>
                    <S.ContainerImage>
                        <Image layout="responsive" loader={() => school.fotoUrl} src={school.fotoUrl}  width={490} height={500} alt="escola"/>
                    </S.ContainerImage>
                    <S.ContainerLeft>
                        <S.Title>
                            {school?.nome}     
                        </S.Title>
                        <S.SectionDescription>
                            <span>Localização: </span>
                            <span> {school?.Localizacao?.endereco1} / {school.Localizacao.Provincia.nome}</span>
                        </S.SectionDescription>
                        <S.SectionDescription>
                            <span>Categoria: {school?.Categoria?.nome}</span>
                        </S.SectionDescription>
                        <S.ContainerLeftFooter>
                            <section>
                                <span>Logo: </span>
                                {school.logo ? <Image loader={() => school.logo} src={school.logo} width={100} height={100} alt="escola" layout="responsive"/> : null} 
                            </section>
                            <section>
                                <S.ButtonSubscribe>Inscrever-se</S.ButtonSubscribe>
                            </section>
                        </S.ContainerLeftFooter>
                    </S.ContainerLeft>
                </S.FirstSection>
                <S.SecondSection>
                    <S.SecondSectionChild1>
                        <S.Title>
                            Historial
                        </S.Title>
                        <S.SectionDescription>
                            <div>
                                    <span style={{marginRight: "0.5rem"}}>
                                        Fundador: {school.historial.fundador} 
                                    </span>
                            </div>
                            <span>
                                Ano:  {school.historial.data}
                            </span>
                        </S.SectionDescription>
                        <S.SectionDescription>
                            <span>Breve História: </span>
                        </S.SectionDescription>
                        <S.ContentStory>
                            <S.DescriptionStory>
                                {school.historial.descricao}
                            </S.DescriptionStory>
                        </S.ContentStory>


                    </S.SecondSectionChild1>
                    <S.SecondSectionChild2>
                        <div>
                            {school.historial.fotoUrl ? <Image loader={() => school.historial.fotoUrl} src={school.historial.fotoUrl} width={100} height={90} alt="escola"  layout="responsive"/> : null} 
                        </div>
                        <div>
                            {school.historial.fotoUrl2 ? <Image loader={() => school.historial.fotoUrl2} src={school.historial.fotoUrl2} width={100} height={90} alt="escola"  layout="responsive"/> : null} 
                        </div>
                        <div>
                            {school.historial.fotoUrl3 ? <Image loader={() => school.historial.fotoUrl3} src={school.historial.fotoUrl3} width={100} height={90} alt="escola" layout="responsive" /> : null} 
                        </div>
                        <div>
                            {school.historial.fotoUrl4 ? <Image loader={() => school.historial.fotoUrl4} src={school.historial.fotoUrl4} width={100} height={90} alt="escola" layout="responsive" /> : null} 
                        </div>
                    </S.SecondSectionChild2>
                </S.SecondSection>
                <S.ThirdSection>
                    <S.Title>
                        Áreas de Formação
                    </S.Title>
                    <S.ContainerCard>
                        {school.Categoria.AreaDeFormacao.map((area) => (
                        <S.Card key={area.id}>                  
                            <div>
                                {area ? <Image loader={() => area?.fotoUrl} src={area.fotoUrl} width={100} height={80} alt="escola" layout="responsive" /> : null}
                            </div>
                            <span>{area.nome}</span> 
                        </S.Card>
                        ))}
                    </S.ContainerCard>
                </S.ThirdSection>
                <S.FourthSection>
                    <S.Title>
                        Actividades Anuais
                    </S.Title>

                    <S.ContainerCard>
                        {school?.actividade.map((activity) => (
                            <S.Card key={activity.id}>
                                <div>
                                    {activity ? <Image loader={() => activity.fotoUrl} src={activity.fotoUrl} width={100} height={80} alt="escola" layout="responsive" /> : null}
                                </div>
                                <span>{activity.nome}</span>
                            </S.Card>
                        ))}
                    </S.ContainerCard>
                </S.FourthSection>
                <S.FifthSection>
                    <S.Title>
                        Corpo Directivo
                    </S.Title>

                    <S.ContainerCard>
                        {school.actividade.map((activity) => (
                            <S.Card key={activity.id}>
                                <div>
                                    {activity ? <Image loader={() => activity.fotoUrl} src={activity.fotoUrl} width={100} height={75} alt="escola" layout="responsive"/> : null}
                                </div>
                                <span>{activity.nome}</span>
                            </S.Card>
                        ))}
                    </S.ContainerCard>
                </S.FifthSection>
                
            </S.Content>
            <Footer/>
        </S.Container>
        </>
    );
}