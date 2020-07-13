import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
`;

export const LeftContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(11, 13, 15);
  transform: translateY(-110%);
  animation-timing-function: cubic-bezier(0.83, 0, 0, 1.42);
`;

export const LeftDivTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 4rem;
`;

export const LeftDivBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 40%;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const NavTopText = styled(animated.div)`
  font-size: 9rem;
  font-weight: ${(props) => props.theme.font.mediumWeight};
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 4rem;
  position: relative;

  @media (max-width: 700px) {
    font-size: 5rem;
  }

  &::before {
    content: '  ';
    width: 0%;
    height: 0.7rem;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 0%;
    transition: all 0.5s ease;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }

  a {
    color: inherit;
  }
`;

export const NavBottomText = styled(animated.p)`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.font.regularWeight};
  color: ${(props) => props.theme.colors.grey};

  a {
    color: inherit;
  }
`;

export const RightContainer = styled(animated.div)`
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  background-color: rgb(11, 13, 15);
  transform: translateY(110%);
  color: #ffff;
`;

export const WordImage = styled(animated.img)`
  width: 70%;
  opacity: 0;
`;
