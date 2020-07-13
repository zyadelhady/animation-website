import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  background: #ffffff;
  color: #000000;
  z-index: 1;
`;

export const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  padding: 10rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  p {
    font-size: 15rem;
    font-weight: 400;

    @media (max-width: 700px) {
      font-size: 8rem;
    }
  }
  span {
    font-size: 12rem;
    font-weight: 600;

    @media (max-width: 700px) {
      font-size: 6rem;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 30%;

  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 4rem;
  }

  a {
    color: ${(props) => props.theme.colors.grey};
    &:hover {
      color: ${(props) => props.theme.colors.black};
    }

    @media (max-width: 700px) {
      margin-bottom: 4rem;
    }
  }
`;
