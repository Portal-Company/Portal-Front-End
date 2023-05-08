import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 4rem 0rem;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.xmultipleeight};
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  gap: 10rem;
  background-color: #e0e0e0;
  /* .slick-slide {
      padding-bottom: 5rem;
    } */
`;
