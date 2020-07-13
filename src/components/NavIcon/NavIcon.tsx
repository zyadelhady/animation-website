import React, { useEffect } from 'react';
import { Container, Line } from './styled';
import { useSpring } from 'react-spring';

export interface NavIconProps {
  clicked: () => void;
  isOpen: boolean;
}

export const NavIcon = (props: NavIconProps) => {
  const [lineTop, setLineTop] = useSpring(() => ({
    transform: 'rotate(0deg)',
    transformOrigin: '40% 40%',
  }));
  const [lineBottom, setLineBottom] = useSpring(() => ({
    transform: 'rotate(0deg)',
    transformOrigin: '40% 40%',
  }));

  useEffect(() => {
    setLineTop({
      transform: props.isOpen ? 'rotate(45deg)' : ' rotate(0deg)',
    });
    setLineBottom({
      transform: props.isOpen ? `rotate(-45deg)` : ' rotate(0deg)',
    });
  }, [props.isOpen, setLineBottom, setLineTop]);

  return (
    <Container
      onClick={() => {
        return props.clicked();
      }}
    >
      <Line firstchild="true" style={lineTop}></Line>
      <Line style={lineBottom}></Line>
    </Container>
  );
};
