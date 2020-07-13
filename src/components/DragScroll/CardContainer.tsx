import React from 'react';
import { Container } from './styled';

export interface CardContainerProps {
  image: string;
}

export const CardContainer = (props: CardContainerProps) => {
  return (
    <Container>
      <img src={props.image} alt="slider" />
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </Container>
  );
};
