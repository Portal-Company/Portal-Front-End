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
`;

export const Card = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 7rem;

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
