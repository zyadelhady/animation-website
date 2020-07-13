import React, { FC } from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';

export interface GoToAboutProps {}

export const GoToAbout: FC<GoToAboutProps> = (props) => {
  return (
    <Container>
      <p>Go to</p>
      <Link to="/about">About</Link>
      <div></div>
    </Container>
  );
};
