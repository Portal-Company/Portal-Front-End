import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: #161d26;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6.5rem;
  font-family: Comfortaa;
`;

export const Content = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  color: #9fa0ad;
  display: flex;
  margin: 5%;

  li {
    margin: 0 3rem;
    font-size: 1.7rem;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  align-items: center;
`;
