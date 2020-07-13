import React from 'react';
import { Container, TextContainer, ImageContainer } from './styled';

export interface CardScrollProps {
  i: number;
  image: string;
}

export const CardScroll = (props: CardScrollProps) => {
  return (
    <Container>
      <TextContainer>
        <h1>0{props.i + 1} &emsp;&emsp; Lorem</h1>
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          maiores amet consequuntur minima impedit, facere ipsam inventore iste
          aspernatur nihil beatae
        </p>
      </TextContainer>
      <ImageContainer>
        <img src={props.image} alt="sandbox" />
      </ImageContainer>
    </Container>
  );
};
