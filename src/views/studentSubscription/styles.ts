import styled from "styled-components";
interface buttonProps {
    color: string;
    backgroundColor: string;
  }

export const Container=styled.div`
    background-color: #f3f3f3;
`;

export const WrapperContainer=styled.div`
    
`;

export const CardBackground=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 20rem;
    background-color:#1ba6e2;
    padding: 1rem 6rem;
    color: #fff;
    h2{
        font-size: 4rem;
    }
    p{
        font-size: 1.7rem;
        color: #333;
    }
    button{
        border: none;
        height: 4rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        border-radius: .3rem;
        svg{
            margin:.3rem;
        }
    }
`;

export const CenterContent=styled.div`
    color: #fff;
    text-align: center;
    margin: auto;
    h2{
        font-size: 2.5rem;
        font-weight: 400;
    }
    span{
        color: #a1d3f0;
    }
`;

export const IconsContainer=styled.div`
    display: flex;
    align-items: center;
    >div:first-child{
        div{
            color:#1ba6e2;
            background-color: #fff;
            border-radius: 50%;
        }
    }
    >div{
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            border:1px solid #a1d3f0;
        }
        color: #a1d3f0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const FormCard=styled.div`
    background-color: #fff;
    position: relative;
    margin:auto;
    padding: 2rem;
    bottom: 4rem;
    width: 80%;
    border-radius: .3rem;
    div:first-child{
        border-bottom: 1px solid #ccc;
        h2{
            padding:1rem 0;
        }
    }

`;

export const CardsContainer=styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
`;

export const Card=styled.div`
    display: flex;
    justify-content: start;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    background-color: ${({theme})=>theme.colors.primary.xblue};
    width: 25rem;
    border-radius:.3rem;
    div{
        padding: 1.1rem;
        background-color: #fff;
        width: 4rem;
        height: 4rem;
        text-align: center;
        border-radius: 50%;
        svg{ 
            color:${({theme})=>theme.colors.primary.xblue} ;
        }
    }
    span{
        color: #fff;
        font-weight: 500;
    }
`;



export const FieldContainer=styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(40rem,1fr));
    gap:1.5rem;
`;

export const Field=styled.div`

`;

export const Button=styled.button`
    background-color: ${({ backgroundColor }: buttonProps) => backgroundColor};
    color: ${({color}:buttonProps)=>color};
    border-radius: .1rem;
    border: none;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: .2rem;
`
