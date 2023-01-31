import styled from "styled-components";

export const Container=styled.div`
    background-color: ${({theme})=>theme.colors.tertiary.white};
    max-width:33rem;
    border-radius: ${({theme})=>theme.spacings.xxxxxmultipleeight};
    padding:${({theme})=>theme.spacings.xxxmultipleeight} ;
`;

export const ImageContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Title=styled.h3`
    margin-top:${({theme})=>theme.spacings.xxxmultipleeight} ;
`;

export const Paragraph=styled.p`
    margin-top:${({theme})=>theme.spacings.xxxmultipleeight} ;
    color: #b5b5b5;
    text-align: justify;
`;

export const Button=styled.button`
    margin-top:${({theme})=>theme.spacings.xxxmultipleeight} ;
    width: 100%;
    height: 4.8rem;
    border: none;
    transition: .2s;
    border-radius: .5rem;
    background: ${({ theme }) => theme.colors.primary.xblue};
    color: ${({ theme }) => theme.colors.tertiary.white};
    font-size: ${({ theme }) => theme.font.sizes.midle};
`;