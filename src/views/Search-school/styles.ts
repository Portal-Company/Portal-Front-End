import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  footer {
    flex: 1;
    justify-content: end;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: #fff !important;
  padding-bottom: 4rem;
  padding-top: 10rem;

  @media screen and (max-width: 768px) {
    padding-bottom: 20rem;
  }
`;

export const FirstSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  > div {
    position: relative;
    display: flex;
    outline: 0;
    border: 0;
    width: 14em;
    height: 3em;
    line-height: 3;
    background: #fff;
    overflow: hidden;
    border-radius: 0.3em;
    border: 1px solid #666;
    > select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      outline: 0;
      box-shadow: none;
      border: 0important;
      background: #fff;
      background-image: none;
      font-family: Comfortaa;
      flex: 1;
      padding: 0 5rem;
      color: #000;
      border: none;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        order: 2;
      }
    }
    > svg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1em;
      padding: 0.3rem;

      height: 100%;
      width: 100%;
      color: #666;
      background: #fff;
      cursor: pointer;

      transition: 0.25s all ease;
    }
  }
  > input {
    padding: 1rem 1rem;
    width: 30rem;
    outline: none;
    border: 1px solid #ddd;
    color: #001;
    border-radius: 0.3rem;

    @media screen and (max-width: 768px) {
      order: 1;
    }
  }
`;

export const SecondSection = styled.div`
  padding: 5rem 5rem;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 2rem;
    justify-content: center;
    gap: 3rem;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 2rem;
    justify-content: center;
    gap: 3rem;
  }
`;
