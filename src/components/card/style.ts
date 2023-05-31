import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 20rem;
  height: 100%;

  max-height: 30rem;
  border-radius: 0.4rem;
  display: flex;
  //border: 1px solid #ddd;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  div {
    width: 100%;

    border-radius: 0.5rem;
    position: relative;

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 1rem;
    }
    img {
      border-radius: 0.4rem 0.4rem 0 0;
      height: 100%;
      max-height: 33rem;
    }
  }

  span {
    margin-top: -1rem;
    background-color: #1c9dea;
    text-align: center;
    width: 89%;
    padding: 1rem;
    color: #fff;
    border-top: 4px dotted #fff;
  }
`;
