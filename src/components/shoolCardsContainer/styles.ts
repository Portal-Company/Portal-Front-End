import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.xmultipleeight};
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  height: 35rem;
  padding: 2rem;
  gap: 10rem;

  .slick-slide {
    padding-bottom: 5rem;
  }
`;
