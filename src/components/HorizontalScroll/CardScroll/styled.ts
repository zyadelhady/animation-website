import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 9.8rem;
  align-items: center;
  @media (max-width: 700px) {
    padding: 1rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }

  p {
    color: #ffffff;
    z-index: 80;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;
export const TextContainer = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.white};

  & > * {
    margin-bottom: 4rem;
    font-family: inherit;
  }

  h1 {
    font-size: 1.9rem;
  }

  h2 {
    font-size: 4rem;
  }

  p {
    font-size: 1.4rem;
    width: 60%;
    line-height: 2.8rem;
    @media (max-width: 700px) {
      width: 100%;
      font-size: 2rem;
    }
  }
`;
