import styled from 'styled-components'

export const Container=styled.div`
    background-color: #f3f3f3;
`;

export const CardBackground=styled.div`
    width: 100vw;
    height: 20rem;
    background-color: ${({theme})=>theme.colors.primary.xblue};
    padding: 3rem;
    color: #fff;
    h2{
        font-size: 4rem;
    }
    p{
        font-size: 2rem;
        color: #333;
    }
`;

export const MainContainer=styled.div`
    padding: 2rem;
`;

export const MenuContainer=styled.div`
    border-radius: .5rem;
    width: 80%;
    height: 7rem;
    position: relative;
    bottom: 5rem;
    background-color: #fff;
    margin:auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
`

export const UserSide=styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Nav=styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
    a{
        padding: 1rem 2rem;
        color:${({theme})=>theme.colors.primary.xblue};
        border-radius: 3rem;
    }
    a.active, a:hover{
     color: #fff;
     background-color:${({theme})=>theme.colors.primary.xblue} ;
 }
`;

export const SchoolName=styled.div`
    display: flex;
    align-items: center;
    h2{
        font-weight: 500;
    }
    span{
        color:#999 ;
    }
`;