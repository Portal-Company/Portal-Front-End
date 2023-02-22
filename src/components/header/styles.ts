import styled from "styled-components";

interface showMenuProps{
  showMenu:boolean
}

export const Wrapper=styled.div`

`;

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
  @media screen and  (max-width: 500px) {
    display:none;
  }
`;

export const ContentLeft = styled.div`
 
`;

export const MenuMobile = styled.div`
  display:none;
  color: #fff;
  
  padding: .5rem;
  font-size: 2.5rem;
  width:3.5rem;
  cursor:pointer;
  @media screen and  (max-width: 500px) {
    display:flex;
    align-items:center;
    justify-content:center;
  }
`;

export const MenuBar=styled.div`
  border-top:1px solid #333;
  border-bottom:1px solid #333;
  padding:${({showMenu}:showMenuProps)=>showMenu?'1rem':'0rem'};
  background-color:#161d26;
  li{
    color:#fff;
    border-radius:.3rem;
    padding:1rem;
  }
  li:hover{
    background-color:${({theme})=>theme.colors.primary.xblue};
  }
  height:${({showMenu}:showMenuProps)=>showMenu?'10rem':'0rem'};
  transition: .3s;
`;