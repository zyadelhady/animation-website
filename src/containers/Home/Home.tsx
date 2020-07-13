import React from 'react';
import { Header } from '../../components/Header/Header';
import { HorizontalScroll } from '../../components/HorizontalScroll/HorizontalScroll';
import { DragContainer } from '../../components/DragScroll/DragContainer';
import { GoToAbout } from '../../components/GoToAbout/GoToAbout';
import { PageAnimation } from '../../components/PageAnimation/PageAnimation';

export interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <>
      <PageAnimation title="Home" />
      <Header />
      <HorizontalScroll />
      <DragContainer />
      <GoToAbout />
    </>
  );
};
