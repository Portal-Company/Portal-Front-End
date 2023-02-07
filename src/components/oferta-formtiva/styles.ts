import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  align-items: center;
  margin-top: 6rem;

  h1 {
    display: flex;
    justify-content: center;
    font-family: Comfortaa;
    font-weight: 300;
    border-bottom: 1px solid #e5e5e5;
    padding: 1.8rem;
    width: 60%;
  }
`;

export const Card = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 5rem;

    font-size: 2.7rem;
    font-family: Comfortaa;
  }
`;
