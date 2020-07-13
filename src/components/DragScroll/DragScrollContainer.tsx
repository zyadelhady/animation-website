import React, {
  ReactChild,
  useRef,
  MouseEvent,
  useState,
  TouchEvent,
} from 'react';
import styled from 'styled-components';

export interface DragScrollContainerProps {
  children: ReactChild;
  containerStyle: object;
}

const Container = styled.div`
  height: auto;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.bg};
`;

const DraggableContainer = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  transform: scale(0.98);
  transition: all 0.2s;
  will-change: scroll-position;
  display: flex;
  justify-content: center;
  /* z-index: 10; */
  position: relative;
`;

export const DragScrollContainer = (props: DragScrollContainerProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const dragDownHandler = (e: MouseEvent | TouchEvent) => {
    setIsDown(true);
    const pageX =
      e.nativeEvent.type === 'touchstart'
        ? (e as TouchEvent).touches[0].pageX
        : (e as MouseEvent).pageX;

    setStartX(pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const dragMoveHandler = (e: MouseEvent | TouchEvent) => {
    if (!isDown) return;

    let pageX: number;

    if (e.nativeEvent.type === 'touchmove') {
      e.stopPropagation();
      pageX = (e as TouchEvent).touches[0].pageX;
    } else {
      e.preventDefault();
      pageX = (e as MouseEvent).pageX;
    }

    const x = pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 0.6;
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  const dragDisableMoseMove = () => setIsDown(false);

  return (
    <Container>
      <DraggableContainer
        ref={sliderRef}
        onMouseDown={dragDownHandler}
        onMouseMove={dragMoveHandler}
        onMouseUp={dragDisableMoseMove}
        onMouseLeave={dragDisableMoseMove}
        onTouchStart={dragDownHandler}
        onTouchMove={dragMoveHandler}
        onTouchEnd={dragDisableMoseMove}
        style={{
          cursor: isDown ? 'grabbing' : 'grab',
          ...props.containerStyle,
        }}
      >
        {props.children}
      </DraggableContainer>
    </Container>
  );
};
