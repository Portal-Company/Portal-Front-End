import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-top: 5rem;
  text-align: center;
  font-family: Comfortaa;
  font-weight: 300;
  padding: 1.8rem;

  &:before {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    mix-blend-mode: hue;
    background-color: red;
    top: 50%;
    left: calc(-24px / 3);
  }
`;

export const Card = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const ImgContainer = styled.div`
  position: relative;
  img {
    border-radius: 1rem;
  }
`;

export const Border = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid yellow;
  position: absolute;
  left: 3rem;
  top: 3rem;
  border-radius: 1rem;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 7rem;
  max-width: 50rem;
  div {
    margin: 1.3rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: Comfortaa;
    width: 100%;
    > svg {
      font-size: 2.9rem;
      margin: 1rem;
      color: ${({ theme }) => theme.colors.primary.xblue};
    }

    span {
      font-size: 2.1rem;
    }
  }
`;
