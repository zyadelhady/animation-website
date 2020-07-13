import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  z-index: 150;
  cursor: pointer;
  top: 8rem;
  right: 8rem;
  mix-blend-mode: difference;
  color: #ffffff;
`;

export const Line = styled(animated.div)<{ readonly firstchild?: string }>`
  width: 4rem;
  height: 0.2rem;
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: ${(props) => (props.firstchild ? '0.5rem' : '')};
  transition: all 0.1s;
`;
