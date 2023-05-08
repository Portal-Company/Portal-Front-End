import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    footer{
        flex: 1;
        justify-content: end;
    }

   
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background: #fff !important;
    padding-bottom: 4rem;
    padding-top: 10rem;

    @media screen and (max-width: 768px) {
       padding-bottom : 20rem;
    }

`

export const FirstSection = styled.div`
    width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }

        >select{
            padding: 1rem 0.5rem;
            width: 15rem;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 0.3rem;
            color: #001;

            @media screen and (max-width: 768px) {
                order: 2;
            }

        }
        >input{
            padding: 1rem 1rem;
            width: 30rem;
            outline: none;
            border: 1px solid #ddd;
            color: #001;
            border-radius: 0.3rem;

            @media screen and (max-width: 768px) {
                order: 1;
            }
        }
`

export const SecondSection = styled.div`
    padding: 5rem 5rem;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 2rem 2rem;
        justify-content: center;
        gap: 3rem;        
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;
        padding: 2rem 2rem;
        justify-content: center;
        gap: 3rem;        
    }
`
