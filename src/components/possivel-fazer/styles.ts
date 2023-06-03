import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
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
  gap: 2rem;
`;

export const ImgContainer = styled.div`
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
  margin-left: 9rem;
  max-width: 45rem;
  div {
    margin: 1rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: Comfortaa;
    width: 100%;
    .icon {
      width: max-content;
      border-radius: 50%;
      background-color: #eee;
      margin-right: 3rem;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.5);
      svg {
        font-size: 2rem;
        margin: 1rem;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: start;
      span {
        margin: 1rem 0;
        font-size: 1.4rem;
        color: #999;
        text-align: justify;
      }
    }
  }
  @media screen and (max-width: 950px) {
    margin-top: 5rem;
  }
  @media screen and (max-width: 500px) {
    margin: 5rem 0;
  }
`;
