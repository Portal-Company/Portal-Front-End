import styled from "styled-components";


export const Card = styled.div`
    width: 30rem;
    height: 25rem;
    border-radius: 0.5rem;
    display: flex;
    border: 1px solid #ddd;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
    }

    div{
        margin-top: 1rem;
        width: 90%;
        height: 18rem;
        border-radius: 0.5rem;
        position: relative;
        @media screen and (max-width: 768px) {
            width: 90%;
            padding: 1rem;
            height: auto;
        }
    }

    span{
        text-align: center;
        padding-bottom: 0.5rem;
    }

`