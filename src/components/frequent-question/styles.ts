import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 60px 0;
  padding: 2rem 0;
  >p{
    color: #999;
    margin: 5rem 0;
  }
`;

export const Title = styled.h2`
  color: #4E4E4E;
  font-size: 4rem;
  font-weight: bold;
  line-height: 30px;
  position: relative;
`;

export const AccordionList = styled.ul`
  width: 50%;
  @media (max-width: 1000px) {
    width: 70%;
  }
`;
export const Item = styled.li`
  position: relative;
  height: 100%;
  &:first-child {
    button {
      border-top: 0.2rem solid ${({ theme }) => theme.colors.tertiary.xcinza};
    }
  }
  button {
    background-color: ${({theme})=>theme.colors.tertiary.xwhite};
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacings.xxxxmultipleeight} 0;
    border: none;
    outline: none;
    transition: 0.3s;
    border-bottom: 0.2rem solid #ccc;
    
    span {
      padding: 1rem;
      font-size: 2rem;
      text-align: left;
    }
    .fa-plus {
      font-size: ${({ theme }) => theme.font.sizes.small};
      transition: 0.2s ease-out;
      background-color: #ccc ;
    }
  }
  div {
    p {
      padding: 2rem 0;
      color: #999;
    }
    .paragraph_array {
      padding:.2rem 0;
    }
  }
  .open {
    background-color: none;
    position: relative;
    max-height: 0;
    transition: max-height 0.5s ease-out;
    background: ${({ theme }) => theme.colors.tertiary.xwhite};
    will-change: max-height;
  }
  .close {
    overflow: hidden;
    transition: 0.3s ease-out;
  }
`;

export const ContactIndicate = styled.span`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  font-size: ${({ theme }) => theme.font.sizes.small};
`;
