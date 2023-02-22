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
    @media screen and (max-width: 1100px) {
        padding: 2rem 4rem;
    }
`

export const ContainerImage = styled.div`
    min-width: 300px;
    width: 400px;
    height: auto;
    padding-bottom: 2rem;
    border-radius: 0.8rem;
    position: relative;

    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        height: auto;
        padding-bottom: 0.5rem;
        min-width: 150px;
    }

    img{
        border-radius: 0.8rem;
        width: 100%;

        @media screen and (max-width: 768px) {
            max-height: 400px !important;
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
    @media screen and (max-width: 1100px) {
        padding: 2rem 4rem;
    }
`


export const SecondSectionChild1 = styled.div`
    width: 40%;
    height: auto;

    @media screen and (max-width: 768px){
        width: 100% !important;
    }

    @media screen and (max-width: 1000px) {
        width: 60%;
    }
`

export const SecondSectionChild2 = styled.div`
    margin-top: 2rem;
    justify-content: end;
    width: 50%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    @media screen and (max-width: 768px){
        width: 100%;
    }

    div{
        width: 45%;
        min-width: 100px;
        height: 200px;

        background: #ddd;

        @media screen and (max-width: 768px){
            width: 100%;
        }
    }
`

export const DescriptionStory = styled.p`
    text-align: justify;
    text-indent: 1.5rem;
    font-size: 1.6rem;

    @media screen and (max-width: 768px){
        width: 100%;
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
    @media screen and (max-width: 1100px) {
        padding: 2rem 4rem;
        flex-direction: column;
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

    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 30rem;
    }

    div{
        margin-top: 1rem;
        width: 90%;
        height: 18rem;
        background: #003;
        border-radius: 0.5rem;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 24rem;
        }
    }

    span{
        text-align: center;
        padding-bottom: 1rem;
    }

`

export const FourthSection = styled.div`
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
    @media screen and (max-width: 1100px) {
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

        h2{
            font-size: 1.9rem;
        }
    }

    @media screen and (max-width: 1000px) {
        padding: 2rem 4rem;
    }
    @media screen and (max-width: 1100px) {
        padding: 2rem 4rem;
        flex-direction: column;
    }

`