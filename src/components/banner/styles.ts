import styled, { keyframes } from "styled-components";
import M1 from "../../../public/assets/m1.jpg";

interface buttonProps {
  color: string;
  backgroundColor: string;
}

const slider = keyframes`
0%{
  left: 0;
}
20%{
  left: 0;
}
25%{
  left: -100%;
}
45%{
  left: -100%;
}
50%{
  left: -200%;
}
70%{
  left: -200%;
}
75%{
  left: -300%;
}
95%{
  left: -300%;
}
100%{
  left: 0;
}
`;

export const ContainerContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 70vh;
  @media screen and  (max-width: 920px) {
    height: 55vh;
  }
`;

export const ContainerMain = styled.div`
  position: relative;
  width: 500%;
  height: 80%;
  left: 0px;
  margin: 0;
  animation: 30s ${slider} infinite;
`;

export const Container = styled.div`
  float: left;
  width: 20%;
  height: 80%;
`;

export const ButtonsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xxmultipleeight};
  display: flex;
  gap: 3rem;
  justify-content: center;
`;

export const Button = styled.button`
  border: none;
  border-radius: 1.1rem;
  width: 21rem;
  height: 5rem;
  font-family: Comfortaa;
  padding: 1.2rem ${({ theme }) => theme.spacings.xxxmultipleeight};
  background-color: ${({ backgroundColor }: buttonProps) => backgroundColor};
  color: ${({ color }: buttonProps) => color};
  z-index: 100;
  @media screen and  (max-width: 620px) {
    width: 15rem;
    height: 4rem;
    border-radius: .6rem;
  }
`;

export const Content = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 80vh;
  flex-direction: column;
  color: #fff;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;


  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 4.5rem;
  }
  
  span {
    font-size: 2rem;
    color: #bfbfbf;
    margin: 1rem 0 1rem 0;
  }
  @media screen and  (max-width: 820px) {
    height: 60vh;
    h1{
      font-size: 2.7rem;
    }
    span{
      font-size: 1.7rem;
    }
  }
  @media screen and  (max-width: 620px) {
    height: 40vh;
  }

`;

