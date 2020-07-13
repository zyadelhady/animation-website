import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.bg};
`;

export const HeaderMainText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 14rem;
  letter-spacing: 1rem;
  z-index: 4;

  @media (max-width: 700px) {
    font-size: 3.7rem;
  }
`;

export const HeaderImage = styled.img`
  width: 25%;
  display: block;
  height: auto;
  opacity: 0.8;
  position: absolute;
  z-index: 2;
  transition-duration: 150ms;
  transition-timing-function: ease-out;

  @media (max-width: 700px) {
    width: 40%;
  }
`;
