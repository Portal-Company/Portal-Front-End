import styled from "styled-components";

export const Container = styled.div`
    height: max-height;
    background-color: #f7fcfe;
`;


export const CardBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 25rem;
    background-color: #19293e;
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

export const CenterContent = styled.div`
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

export const IconsContainer = styled.div`
    margin: 2rem;
    display: flex;
    align-items: center;
    >div:first-child{
        div{
            div{
                color:#1ba6e2;
                background-color: #fff;
                border-radius: 50%;
            }
        }
    }
    >div{
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
    p{
        color:#a1d3f0 ;
        font-weight: 500;
        text-align: start;
    }
}        
`;

export const Footer = styled.div`
    height: 5rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    display:flex;
    justify-content:space-between;
    `;

export const BackButton = styled.div`
    width:50%;
    background-color:  #161d26;
    display: flex;
    justify-content:center;
    align-items: center;
    color: #fff;
    font-weight: 500;
    `;


export const ForewardButton=styled(BackButton)`
    background-color: #19293e;  
    svg{
        margin-top:.5rem;
        margin-left:.5rem ;
    }
    button{
        background-color:transparent;
        color:#fff;
        width:40%;
        border:none;
    }
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
    textarea{
    border:.1px solid #cacaca;
    margin-top: 2rem;
    font-size: 1rem;
    padding: 1.3rem;
    width: 100%;
    max-width: 40rem;
    flex: 1;
    font-size: 1.5rem;
    color:#a9a6b3;
    :focus{
        border-bottom:.1px solid #1ba6e2;
        transition: 2s ease-in-out;
    }
    }
    input[type="file"]{
        border: none;
        border-bottom:.1px solid #cacaca;
        margin-top: 2rem;
        font-size: 1rem;
        padding: 1.3rem;
        width: 100%;
        max-width: 40rem;
        flex: 1;
        font-size: 1.2rem;
        ::placeholder{
            font-weight: bolder;
            color:#a9a6b3;
        }
        :focus{
            border-bottom:.1px solid #1ba6e2;
            transition: 2s ease-in-out;
        }
    }
`;

export const Field=styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
`;

export const Select=styled.select`
    border: none;
    border-bottom:.1px solid #cacaca;
    margin-top: 2rem;
    font-size: 1rem;
    padding: 1.3rem;
    width: 100%;
    max-width: 40rem;
    flex: 1;
    font-size: 1.5rem;
    color:#a9a6b3;
    :focus{
        border-bottom:.1px solid #1ba6e2;
        transition: 2s ease-in-out;
    }
`;

export const WrapperContainer=styled.form`
    button{
        z-index: 100;
        position: absolute;
        top:2rem;
    }  
`;

export const Input=styled.input`

`;