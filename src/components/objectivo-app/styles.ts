import styled from "styled-components";

export const Wrapper = styled.div`
  color: #fff;
  width: 100%;
  height: 35vh;
  background-color: #161d26;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2{
    padding: 2rem;
  }
`;

export const InputContainer=styled.div`
  width: 45rem;
  height: 4.5rem;
`;

export const Input=styled.input`
  padding: 1rem;
  width: 75%;
  border: none;
  height: 100%;
`;

export const Button=styled.button`
  color: #fff;
  width: 25%;
  height: 4.9rem;
  background-color: ${({theme})=>theme.colors.primary.xblue};
  padding: 1rem;
`;