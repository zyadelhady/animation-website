import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  margin: 5rem;
  width: 100%;

  img {
    max-width: 80rem;
  }

  p {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    margin: 25rem;

    img {
      max-width: 40rem;
    }
  }
`;

export const CardsDiv = styled(animated.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-left: 140rem;
  height: 100vh;
  transition-timing-function: ease-out;

  @media (max-width: 700px) {
    padding-left: 160rem;
  }
`;

//* Drag Mouse

export const MouseContainer = styled.div`
  display: none;
  position: absolute;
  width: 15rem;
  height: 7rem;
  background-color: #cccccc;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  left: 0;
  top: 0;
  overflow: hidden;
  transition: all 0.4s;
  color: #000000;
  transition-duration: 150ms;
  z-index: 5;
  transition-timing-function: ease-out;
`;
