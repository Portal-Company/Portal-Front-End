import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: #f3f3f3;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardText = styled.div`
  flex: 1;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;
