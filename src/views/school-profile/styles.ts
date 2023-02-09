import styled from 'styled-components'

export const Container=styled.div`
    background-color: #f3f3f3;
`;

export const CardBackground=styled.div`
    width: 100%;
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
    position: relative;
    margin:auto;
    padding: 2rem;
    bottom: 5rem;
    width: 80%;
`;

export const MenuContainer=styled.div`
    border-radius: .5rem;
    height: 7rem;
    background-color: #fff;
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

export const LittleCard=styled.div`
    margin-top: 2rem;
    background-color: #fff;
    height: 20rem;
    width: 25rem;

    div:first-child{
        h2{
            color: #333;
        }
        padding: 1.5rem;
        border-bottom: 1px solid #ccc;
    }
`;

export const Wrapper=styled.div`

`;

export const LeftSide=styled.div`

`;

export const CenterSide=styled.div`

`;

export const RightSide=styled.div`

`;

export const Noticia=styled.div`
    display: flex;
    align-items: center;
    color: #6d6d6d;
    margin-top: 1rem;
    span{
        padding: 1rem;
        font-size: 2rem;
    }
`;