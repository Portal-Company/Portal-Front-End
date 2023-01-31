import styled  from "styled-components";

interface buttonProps{
    color:string;
    backgroundColor:string;
}

export const Container=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const TitleInformation=styled.h2`
    margin-top: ${({theme})=>theme.spacings.xxmultipleeight};
    max-width: 70rem;
    font-size:4rem;
    text-align: center;
`;

export const Description=styled.p`
    margin-top: ${({theme})=>theme.spacings.xxxxmultipleeight};
    color: #B5B5B5;
    text-align:center ;
`;

export const ButtonsContainer=styled.div`
    margin-top: ${({theme})=>theme.spacings.xxmultipleeight};
    display: flex;
    gap: 3rem;
    justify-content: center;
`;

export const Button=styled.button`
    border: none;
    border-radius: 1.1rem;
    width: 21rem;
    height: 5rem;
    padding:1.2rem ${({theme})=>theme.spacings.xxxmultipleeight};
    background-color: ${({backgroundColor}:buttonProps)=>backgroundColor};
    color:${({color}:buttonProps)=>color} ;
    z-index: 100;
`;
 export const ImageContainer=styled.div`
    position: relative;
    bottom: 10rem;
 `;