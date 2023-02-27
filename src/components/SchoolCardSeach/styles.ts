import styled from "styled-components";



export const SectionCard = styled.div`
    padding: 1rem;
    position: relative;
    width: 30%;
    height: 35rem;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 894px) {
        width: 90%;
        min-width: 250px;
    }


    &:hover{
        background: #fcfdff;
        cursor: pointer;
        color: #000;
        opacity: 0.6;
        transition: all 0.5s ease;

        h2{
            font-weight: 400;
        }

        button{
            opacity: 1;
        }

    }

    @media screen and (max-width: 768px){
        cursor: pointer;

    &:hover{
        background: #fcfdff;
        cursor: pointer;
        color: #000;
        opacity: 0.6;
        transition: all 0.5s ease;

        h2{
            font-weight: 400;
        }

        button{
            opacity: 1;
        }

    }

    }


`
export const ContainerImage = styled.div`
    display: flex;
    width: 100%;
    height: 35rem;
    justify-content: center;
        img{
            width: 40rem !important;
            height: 5rem !important;
            border-radius: 0.2rem;
            object-fit: cover;
            
            
            @media screen and (max-width: 768px) {
                display: flex;
                flex: 1;
                object-fit: cover;
            }
        }

`
export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 300;
`

export const Button = styled.button`
    width: 15rem;
    padding: 1rem 0;
    outline: none;
    border: none;
    background: #003;
    font-size: 1.5rem;
    border-radius: 0.2rem;
    color: #fff;
    position: absolute;
    top: 50%;
`