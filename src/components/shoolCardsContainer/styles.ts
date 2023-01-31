import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    justify-content: center;
    gap: ${({theme})=>theme.spacings.xmultipleeight};
    flex-wrap: wrap;
`;