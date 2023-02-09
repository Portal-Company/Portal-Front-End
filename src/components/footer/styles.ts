import styled from "styled-components";

export const Container = styled.footer`
  background-color: #161d26;
  position: relative;
  top: 3rem;
`;

export const FooterInformations = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    font-size: ${({ theme }) => theme.spacings.xxxmultipleeight};
    margin-bottom: ${({ theme }) => theme.spacings.xmultipleeight};
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 9rem;
  padding-top: 4rem;
  width: 85%;
  margin: auto;
  color: ${({ theme }) => theme.colors.tertiary.xcinza};
`;

export const PortalSocialMedia = styled.div`
  max-width: 25rem;
  p {
    text-align: center;
    margin: ${({ theme }) => theme.spacings.xxmultipleeight} 0;
    color: ${({ theme }) => theme.colors.tertiary.xxcinza};
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
  div {
    display: flex;
    justify-content: centar;
    gap: 4.6rem;
    svg {
      font-size: 2.5rem;
    }
  }
`;

export const Suport = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: #ccc;
    margin-bottom: ${({ theme }) => theme.spacings.xxxmultipleeight};
  }
`;

export const DirectoReserve = styled.div`
  color: #000;
  margin-top: 2rem;
  background-color: #dfdfdf;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
`;

export const Resources = styled(Suport)``;

export const GateMed = styled(Suport)``;
