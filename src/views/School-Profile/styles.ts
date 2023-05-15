import styled from "styled-components";

interface BannerFundo {
  backgroundCapa: any;
}

export const Container = styled.div`
  background-color: #f3f3f3;
`;

export const Opacity = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem 6rem;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.7);
`;

export const CardBackground = styled.div`
  background-image: url(${({ backgroundCapa }: BannerFundo) => backgroundCapa});

  width: 100%;
  height: 31rem;

  //background-color: ${({ theme }) => theme.colors.primary.xblue};
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  color: #fff;
  h2 {
    font-size: 3rem;
    margin-top: -5rem;
  }
  p {
    font-size: 1.7rem;
    color: #333;
  }
`;

export const ButtonSubscribe = styled.button`
  font-size: 1.5rem;
  color: #fff;
  margin-top: -5rem;
  border: 0;
  font-weight: 800;
  background-color: ${({ theme }) => theme.colors.primary.xblue};
  padding: 0 5rem;
  border-radius: 0.25rem;
  font-family: Comfortaa;
  height: 4.4rem;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const MainContainer = styled.div`
  position: relative;
  margin: auto;
  padding: 2rem;
  bottom: 7rem;
  width: 80%;
`;

export const Title = styled.h2`
  color: #535252;
  font-size: 2.1rem;
  margin-bottom: 0.5rem;
  font-weight: 800;
`;

export const SectionDescription = styled.div`
  display: flex;
  padding-top: 2rem;
  font-size: 1.3rem;
  color: #535252;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    flex-direction: column;

    div {
      display: flex;
      gap: 0.5rem;
    }
  }
`;

export const MenuContainer = styled.div`
  border-radius: 0.5rem;
  height: 12rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const UserSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  a {
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.colors.primary.xblue};
    border-radius: 3rem;
  }
  a.active,
  a:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary.xblue};
  }
`;

export const SchoolName = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.005rem;
  h2 {
    font-weight: 500;
  }
  span {
    color: #999;
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  height: auto;
  gap: 3rem;
  display: flex;

  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
    align-items: center;
  }
`;

export const LittleCard = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  height: 20rem;
  width: 50%;
  padding: 2rem 2rem;
  div:first-child {
    h2 {
      color: #333;
    }

    padding: 1.5rem;
    border-bottom: 1px solid #ccc;
  }

  &:first-child {
    margin-right: 3rem;
  }
`;

export const Historial = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  height: 33rem;
  width: 100%;
  padding: 2rem 2rem;
  line-height: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  div:first-child {
    margin-bottom: 1rem;

    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  position: sticky;
  //display: grid;
  //grid-template-columns: 1fr 2fr 1fr;
  //gap: 1.5rem;
  width: 100%;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;

export const CenterSide = styled.div``;

export const Item = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  padding: 1rem;
  span {
    color: ${({ theme }) => theme.colors.primary.xblue};
  }
`;

export const Publication = styled.div``;

export const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Avatar = styled.div``;

export const RightSide = styled.div``;

export const Noticia = styled.div`
  display: flex;
  align-items: center;
  color: #6d6d6d;
  margin-top: 1rem;
  span {
    padding: 1rem;
    font-size: 2rem;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.xblue};
  }
`;
