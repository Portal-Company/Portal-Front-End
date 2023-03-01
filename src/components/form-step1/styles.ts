import styled from "styled-components";

export const WrapperContainer=styled.div`
    
`;

export const Paragraph=styled.p`
    font-weight: 500;
    text-align: start;
    max-width: 40rem;
    margin: auto;
`;


export const FormCard=styled.div`
    background-color: #fff;
    box-shadow:0 .5rem 1.5rem rgba(0,0,0,0.1);
    position: relative;
    margin:auto;
    padding: 5rem 2rem;
    bottom: 4rem;
    width: 70%;
    border-radius: 1rem;
    div:first-child{
        border-bottom: 1px solid #ccc;
        h2{
            padding:1rem 0;
        }
    }
    @media screen and  (max-width: 820px) {
        width: 99%;
    }
`;

export const Forms=styled.div`
    display:flex ;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    >label{
        width:100%;
        max-width:40rem;
        margin: 2rem 0;
        text-align:start;
        font-weight: 500;
    }
    >div{
        width:100%;
        max-width:40rem;
        display:flex;
        align-items: center;
        justify-content:space-between;
    }
`;

export const Field=styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
`;