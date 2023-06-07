import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagemContainer = styled.div`
  background-color: #fff;
`;

export const TextContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #999;
    margin: 1rem 0;
  }

  button {
    transition: border-color 0.2s;
    border: none;
    background-color: #1c9deb;
    padding: 1.4rem 7rem;
    color: #fff;
    font-family: Comfortaa;
    margin-top: 1.5rem;
    transition: 0.3s;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #2676a5;
    }
  }
`;

export const Content = styled.div`
  margin-top: 5rem;
  width: 84%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
