import * as S from "./styles";
import estudantes from "../../../public/assets/students.png";
import M1 from "../../../public/assets/m1.jpg";
import M2 from "../../../public/assets/m2.jpg";
import M3 from "../../../public/assets/m5.jpg";

import M4 from "../../../public/assets/m4.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <S.ContainerContainer>
      <S.ContainerMain>
        <S.Container>
          <S.Content>
            <h1>Seu sonho começa aqui</h1>
            <span>Criando o futuro apenas com um click</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                Inscrever-se
              </S.Button>
              <S.Button color="#fff" backgroundColor="#161D2B">
                Cadastrar
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src={M4}
            alt="m1"
            layout="responsive"
            height={540}
            width={1009}
          />
        </S.Container>
        <S.Container>
          <S.Content>
            <h1>Inscreva-se na melhor escola de Angola</h1>
            <span>Criando o futuro apenas com um click</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                Inscrever-se
              </S.Button>
              <S.Button color="#fff" backgroundColor="#161D2B">
                Cadastrar
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src={M1}
            alt="m1"
            layout="responsive"
            height={540}
            width={1009}
          />
        </S.Container>
        <S.Container>
          <S.Content>
            <h1>Já sabe onde estudar?</h1>
            <span>Comece aqui</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                Inscrever-se
              </S.Button>
              <S.Button color="#fff" backgroundColor="#161D2B">
                Cadastrar
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src={M2}
            alt="m1"
            layout="responsive"
            height={540}
            width={1009}
          />
        </S.Container>

        <S.Container>
          <S.Content>
            <h1>Inscreva-se na melhor escola de Angola</h1>
            <span>Criando o futuro apenas com um click</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                Inscrever-se
              </S.Button>
              <S.Button color="#fff" backgroundColor="#161D2B">
                Cadastrar
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src={M3}
            alt="m1"
            layout="responsive"
            height={540}
            width={1009}
          />
        </S.Container>

        <S.Container>
          <S.Content>
            <h1>Inscreva-se na melhor escola de Angola</h1>
            <span>Criando o futuro apenas com um click</span>
            <S.ButtonsContainer>
              <S.Button color="#fff" backgroundColor="#1C9DEA">
                Inscrever-se
              </S.Button>
              <S.Button color="#fff" backgroundColor="#161D2B">
                Cadastrar
              </S.Button>
            </S.ButtonsContainer>
          </S.Content>
          <Image
            src={M1}
            alt="m1"
            layout="responsive"
            height={540}
            width={1009}
          />
        </S.Container>
      </S.ContainerMain>
    </S.ContainerContainer>
  );
};
export default Banner;
