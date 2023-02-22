import Image from "next/image";
import { Footer } from "../../components/footer";
import { SchoolCardSearch } from "../../components/SchoolCardSeach";
import { imgUrl, schools } from "./mock";
import * as S from "./styles"


export function SchoolProfileView (){
    const logo = "https://inscricao.ipilmakarenko.ao/assets/logotipo.2a4eed3f.png"
    return(
        <>
        <S.Container>
            <S.Content>
                <S.FirstSection>
                    <S.ContainerImage>
                        <Image layout="responsive" loader={() => imgUrl} src={imgUrl} width={490} height={500} alt="escola"/>
                    </S.ContainerImage>
                    <S.ContainerLeft>
                        <S.Title>
                            Instituto Politécnico Industrial de Luanda
                        </S.Title>
                        <S.SectionDescription>
                            <span>Localização: </span>
                            <span> Luanda - primeiro de Maio</span>
                        </S.SectionDescription>
                        <S.SectionDescription>
                            <span>Categoria: </span>
                            <span> Ensino médio Técnico</span>
                        </S.SectionDescription>
                        <S.ContainerLeftFooter>
                            <section>
                                <span>Logo: </span>
                                <Image loader={() => logo} src={logo} width={100} height={100} alt="escola"/>
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
                                    <span>
                                        Fundador:
                                    </span>
                                    <span>
                                        Pedro Muteka
                                    </span>
                            </div>
                            <span>
                                Ano: 20/02/2020
                            </span>
                        </S.SectionDescription>
                        <S.SectionDescription>
                            <span>Breve História: </span>
                        </S.SectionDescription>
                        <S.ContentStory>
                            <S.DescriptionStory>
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                as opposed to using Content here, content here,
                                making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </S.DescriptionStory>
                        </S.ContentStory>


                    </S.SecondSectionChild1>
                    <S.SecondSectionChild2>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </S.SecondSectionChild2>
                </S.SecondSection>
                <S.ThirdSection>
                    <S.Title>
                        Áreas de Formação
                    </S.Title>

                    <S.ContainerCard>
                        <S.Card>
                            <div>

                            </div>
                            <span>Informatica</span>
                        </S.Card>
                        <S.Card>
                            <div>

                            </div>
                            <span>Informatica</span>
                        </S.Card><S.Card>
                            <div>

                            </div>
                            <span>Informatica</span>
                        </S.Card><S.Card>
                            <div>

                            </div>
                            <span>Informatica</span>
                        </S.Card>
                    </S.ContainerCard>
                </S.ThirdSection>
                <S.FourthSection>
                    <S.Title>
                        Actividades Anuais
                    </S.Title>

                    <S.ContainerCard>
                        <S.Card>
                            <div>

                            </div>
                            <span>Informatica</span>
                        </S.Card>
                        <S.Card>
                            <div>

                            </div>
                            <span>Informatica</span>
                        </S.Card><S.Card>
                            <div>

                            </div>
                            <span>Informatica</span>
                        </S.Card><S.Card>
                            <div>

                            </div>
                            <span>Informatica</span>
                        </S.Card>
                    </S.ContainerCard>


                </S.FourthSection>
                <S.FifthSection>
                    <S.Title>
                        Corpo Directivo
                    </S.Title>

                    <S.ContainerCard>
                        <S.Card>
                            <div>

                            </div>
                            <span>Informatica</span>
                        </S.Card>
                        <S.Card>
                            <div>

                            </div>
                            <span>Informatica</span>
                        </S.Card><S.Card>
                            <div>

                            </div>
                            <span>Informatica</span>
                        </S.Card><S.Card>
                            <div>

                            </div>
                            <span>Informatica</span>
                        </S.Card>
                    </S.ContainerCard>


                </S.FifthSection>
                
            </S.Content>
            <Footer/>
        </S.Container>
        </>
    );
}