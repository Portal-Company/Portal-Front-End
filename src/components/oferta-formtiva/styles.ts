import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  margin-top: 10rem;
  text-align: center;
  font-family: Comfortaa;
  font-weight: 300;
  padding: 1.9rem;
`;

export const Card = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  width: 100%;
  h2 {
    margin-top: 3rem;
  }
  img {
    border-radius: 1rem;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  max-width: 50rem;
  h2 {
    margin-bottom: 5rem;
    font-size: 2.7rem;
    font-family: Comfortaa;
  }
  p {
    color: #999;
    margin-bottom: 5rem;
    text-align: justify;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`;
