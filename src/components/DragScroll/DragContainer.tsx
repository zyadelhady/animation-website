import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { DragScrollContainer } from './DragScrollContainer';
import { CardContainer } from './CardContainer';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';
import slider5 from '../../assets/slider5.jpg';
import { useMouse, useMedia } from 'react-use';
import { DragMouse } from './DragMouse';
import { useSpring } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

import { CardsDiv } from './styled';

export interface DragContainerProps {}

export const DragContainer = (props: DragContainerProps) => {
  const [visible, setVisible] = useState(false);

  const items = useState([slider1, slider3, slider5, slider2, slider3])[0];

  const containerRef = useRef(null);
  const dragComponnentRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMedia('(min-width: 992px)');
  const { elX, elY } = useMouse(containerRef);

  useLayoutEffect(() => {
    if (elX > 0 && elY > 0 && isDesktop) {
      dragComponnentRef.current!.style.display = 'flex';
      dragComponnentRef.current!.style.left = `${
        elX - dragComponnentRef.current!.offsetWidth / 2
      }px`;
      dragComponnentRef.current!.style.top = `${
        elY - dragComponnentRef.current!.offsetHeight / 2
      }px`;
    }
  }, [elX, elY, isDesktop]);

  const [CardsContainer, setCardsContainer] = useSpring(() => ({
    transform: 'translate(0%,0%)',
    config: {
      duration: 500,
      precision: 0,
    },
    from: { transform: 'translate(110%,110%)' },
  }));

  useEffect(() => {
    if (visible) {
      setCardsContainer({
        transform: 'translate(0,0)',
      });
    } else {
      setCardsContainer({
        transform: 'translate(110%,110%)',
      });
    }
  }, [setCardsContainer, visible]);

  const onChange = (isVisible: boolean) => {
    setVisible(isVisible);
  };

  return (
    <VisibilitySensor partialVisibility={true} onChange={onChange}>
      <DragScrollContainer
        containerStyle={{
          width: '100%',
          height: '100vh',
          zIndex: 10,
        }}
      >
        <>
          {isDesktop && <DragMouse ref={dragComponnentRef} />}

          <CardsDiv style={CardsContainer} ref={containerRef}>
            {items.map((el, i) => (
              <CardContainer image={el} key={i} />
            ))}
          </CardsDiv>
        </>
      </DragScrollContainer>
    </VisibilitySensor>
  );
};
