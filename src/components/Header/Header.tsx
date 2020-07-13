import React, { useRef, useLayoutEffect } from 'react';
import { Container, HeaderMainText, HeaderImage } from './styled';
import partnerImage from '../../assets/partner-with-us.jpg';
import { useMouse, useMedia } from 'react-use';

export interface Props {}

export const Header = (props: Props) => {
  const mouseRef = useRef(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const isDesktop = useMedia('(min-width: 992px)');
  const { elX, elY } = useMouse(mouseRef);

  useLayoutEffect(() => {
    if (elX > 0 && elY > 0 && isDesktop) {
      imgRef.current!.style.left = `${elX - imgRef.current!.width / 2}px`;
      imgRef.current!.style.top = `${elY - imgRef.current!.height / 2}px`;
    }
  }, [elX, elY, isDesktop]);

  return (
    <Container ref={mouseRef}>
      <HeaderMainText>Partner with us,</HeaderMainText>
      <HeaderImage
        ref={imgRef}
        id="image"
        src={partnerImage}
        alt="partner"
        draggable={false}
      ></HeaderImage>
    </Container>
  );
};
