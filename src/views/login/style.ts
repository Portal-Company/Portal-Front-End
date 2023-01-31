import styled from "styled-components";

export const Container=styled.div`
    
`;

export const BollTopContainer=styled.div`
    position: relative;
    bottom:12rem;right: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFC704;
    width: 30rem; height: 30rem;
    border-radius: 50%;
`;

export const Form=styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title=styled.h2`

`;

export const BorderContainer=styled.div`
    display: flex;
    hr{
        width:10rem;
        height:1px;
    }
`;

export const SocialMediaIcons=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BollBottomContainer=styled(BollTopContainer)`
    position: relative;
    bottom:8rem;left: 60rem;
    background-color: #385A64;
`;