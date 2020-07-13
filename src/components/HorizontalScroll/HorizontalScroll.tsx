import React, { useState } from 'react';
import { HorizontalScrollComponnent } from './HorizontalScrollComponnent';
import { CardScroll } from './CardScroll/CardScroll';
import sandBox from '../../assets/sandbox.jpg';
import eleanor from '../../assets/eleanor.jpg';
import olumo from '../../assets/olumo.jpg';
import finalcard from '../../assets/finalcard.jpg';

export interface HorizontalScrollProps {}

export const HorizontalScroll = (props: HorizontalScrollProps) => {
  const items = useState([sandBox, eleanor, olumo, finalcard])[0];

  return (
    <HorizontalScrollComponnent style={{ backgroundColor: '#0E0E11' }}>
      {items.map((el, i) => {
        return <CardScroll key={i} image={el} i={i} />;
      })}
    </HorizontalScrollComponnent>
  );
};
