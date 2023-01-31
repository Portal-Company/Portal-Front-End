import styled from "styled-components";

export const MainContainer=styled.div`

`;

export const TopHeader=styled.header`
    display: flex;
    justify-content: center;
    padding: ${({theme})=>theme.spacings.xxxxxmultipleeight};
`;

export const Menu=styled.ul`
    color: #9FA0AD;
    display: flex;
    align-items: center;
    gap: 4rem;
    li{
        font-size: 1.7rem;
        font-weight: ${({theme})=>theme.font.medium};
    }
`;

export const BottomHeader=styled.header`
    display: flex;
    align-items:center;
    justify-content: space-between;
    background-color: ${({theme})=>theme.colors.secondary.xxdark};
    padding: ${({theme})=>theme.spacings.xxxxmultipleeight} 3rem;
`;