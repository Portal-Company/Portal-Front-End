import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;

    footer{
        flex: 1;
        justify-content: end;
    }
`

export const Content = styled.div`
    width: 100%;
    height: auto;
    background: #fff;
    padding-bottom: 4rem;
    padding-top: 5rem;

    @media screen and (max-width: 768px) {
        padding-bottom : 20rem;
    }
`

export const FirstSection = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    padding: 0.5rem 15rem;
    gap: 5rem;

    @media screen and (max-width: 768px) {
        padding: 2rem 2rem;
        flex-direction: column;
    }

    @media screen and (max-width: 1000px) {
        padding: 2rem 4rem;
    }
    @media screen and (max-width: 1300px) {
        padding: 2rem 4rem;
    }
`

export const ContainerImage = styled.div`
    min-width: 33rem;
    width: 40rem;
    height: auto;
    max-height: 40rem;
    position: relative;

    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 40rem;
        height: auto;
        min-width: 150px;
    }

    img{
        border-radius: 0.4rem;
        width: 100%;

        @media screen and (max-width: 768px) {
            max-height: 30rem;
        }
    }

`

export const ContainerLeft = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    h2{
        margin-top: 1rem;

        @media screen and (max-width: 768px) {
            font-size: 2rem;
        }
    }

`

export const Title = styled.h2`
    color: #535252;
    font-size: 2.5rem;
    font-weight: 400;
`

export const SectionDescription = styled.div`
    display: flex;
    padding-top: 2rem;
    font-size: 1.8rem;
    color: #535252;
    gap: 0.5rem;

    @media screen and (max-width: 768px) {
        font-size: 1.6rem;
        flex-direction: column;

        div{
            display: flex;
            gap: 0.5rem;
        }
    }
    
`

export const ContainerLeftFooter = styled.div`
    padding-top: 3rem;
    display: flex;
    width: 100%;
    justify-content: space-between;


    @media screen and (max-width: 768px){
        flex-direction: column;
    }

    section:nth-child(1){
        display: flex;
        flex-direction: column;
        width: 10rem;
        gap: 1rem;
        max-width: 300px;

        img{
            border-radius: 50%;

            @media screen and (max-width: 768px){
                width: 200px;
            }
        }
    }

    section:nth-child(2){
        display: flex;
        align-items: flex-end;
        @media screen and (max-width: 768px){
            justify-content: start;
            margin-top: 2rem;

        }
    }
`

export const ButtonSubscribe = styled.button`
    width: 15rem;
    padding: 1.5rem 1rem;
    background-color: #1C9DEA;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    color: #fff;

    @media screen and (max-width: 768px) {
        width: 95%;
        margin: 0 auto;
    }

    &:hover{
        filter: brightness(0.8);
        font-weight: 400;
    }
`

export const SecondSection = styled.div`
    width: 100%;
    height: auto;
    padding: 5rem 15rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media screen and (max-width: 768px) {
        padding: 2rem 2rem;
        flex-direction: column;
        h2{
            font-size: 1.9rem;
        }
    }
    @media screen and (max-width: 1300px) {
        padding: 2rem 4rem;
        flex-direction: column;
    }
`


export const SecondSectionChild1 = styled.div`
    width: 100%;
    max-width: 60rem;
    padding-top: 2rem;
    height: auto;

    @media screen and (max-width: 768px){
        width: 100%;
    }

    @media screen and (max-width: 1300px) {
        width: 100%;
    }
`

export const SecondSectionChild2 = styled.div`
    margin-top: 2rem;
    padding-bottom: 2rem;
    justify-content: end;
    width: 100%;
    max-width: 50rem;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;

    @media screen and (max-width: 1100px){
        width: 80%;
        height: auto;
        flex-direction: column;
        gap: 2rem;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        height: auto;
        flex-direction: column;
        gap: 2rem;

        div{
            width: 100%;
        }
    }

    div{
        max-width: 20rem;
        width: 100%;
        cursor: pointer;
        height: auto;
        @media screen and (max-width: 768px){
            width: 100%;
            max-width: 40rem;
            height: auto;
        }

        img{
            border-radius: 0.4rem;
        }
    }
`

export const DescriptionStory = styled.p`
    text-align: justify;
    text-indent: 1.5rem;
    font-size: 1.6rem;

    @media screen and (max-width: 768px){
        width: 90%;
        text-align: justify;
        font-size: 1.2rem;
    }

`

export const ContentStory = styled.div`
    width: 100%;
    height: auto;
    margin-top: 2rem;
    color: #535252;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const ThirdSection = styled.div`
    width: 100%;
    height: auto;
    padding: 2rem 15rem; 
    @media screen and (max-width: 768px) {
        padding: 2rem 2rem;
        flex-direction: column;
        h2{
            font-size: 1.9rem;
        }
    }
    @media screen and (max-width: 1000px) {
        padding: 2rem 4rem;
    }
    @media screen and (max-width: 1300px) {
        padding: 2rem 4rem;
        flex-direction: column;
        text-align: center;
    }
`

export const ContainerCard = styled.div`
    width: 100%;
    height: auto;
    gap: 2rem;
    display: flex;
    padding-top: 4rem;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 2rem 1rem;
        align-items: center;
    }
`

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

export const FourthSection = styled.div`
    width: 100%;
    height: auto;
    padding: 2rem 15rem; 
    @media screen and (max-width: 768px) {
        padding: 2rem 2rem;
        flex-direction: column;
        text-align: center;
        h2{
            font-size: 1.9rem;
        }
    }

    @media screen and (max-width: 1000px) {
        padding: 2rem 4rem;
    }
    @media screen and (max-width: 1300px) {
        padding: 2rem 4rem;
        flex-direction: column;
    }
`

export const FifthSection = styled.div`
    width: 100%;
    height: auto;
    padding: 2rem 15rem; 

    @media screen and (max-width: 768px) {
        padding: 2rem 2rem;
        flex-direction: column;
        text-align: center;
        h2{
            font-size: 1.9rem;
        }
    }

    @media screen and (max-width: 1000px) {
        padding: 2rem 4rem;
    }
    @media screen and (max-width: 1300px) {
        padding: 2rem 4rem;
        flex-direction: column;
    }

`