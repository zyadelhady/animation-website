import React, { useEffect, useState } from 'react';
import {
  Container,
  RightContainer,
  LeftContainer,
  NavTopText,
  LeftDivTop,
  LeftDivBottom,
  NavBottomText,
  WordImage,
} from './styled';
import { useSpring, useTrail } from 'react-spring';
import image1 from '../../assets/reform-collective-ultra-1.svg';
import image2 from '../../assets/reform-collective-ultra-2.svg';

import { Link } from 'react-router-dom';

export interface NavBarProps {
  clicked: () => void;
  isOpen: boolean;
}

export const NavBar = (props: NavBarProps) => {
  const pages = useState([
    {
      to: '/',
      text: 'Home',
    },

    {
      to: '/about',
      text: 'About us',
    },
    {
      to: '/contact',
      text: 'Contact',
    },
  ])[0];

  const footerItems = useState([
    {
      to: 'https://github.com/zyadelhady',
      text: 'Github',
    },

    {
      to: 'https://www.facebook.com/zyadelhady2000',
      text: 'facebook',
    },
    {
      to: 'https://twitter.com/Hmtaro__',
      text: 'twitter',
    },
    {
      to: 'https://www.instagram.com/zyad_elhady/',
      text: 'instagram',
    },
  ])[0];

  const [RightDiv, setRightDiv] = useSpring(() => ({
    transform: 'translateY(-110%)',
    config: {
      duration: 600,
      precision: 0.5,
    },
  }));

  const [LeftDiv, setLeftDiv] = useSpring(() => ({
    transform: 'translateY(110%)',
    config: {
      duration: 600,
      precision: 0.5,
    },
  }));

  const [LeftImage, setLeftImage] = useSpring(() => ({
    transform: 'translateX(110%)',
    opacity: 1,
    config: {
      duration: 600,
      precision: 0.5,
    },
    from: { transform: 'translateX(0%)' },
  }));

  const [RightImage, setRightImage] = useSpring(() => ({
    transform: 'translateX(0%)',
    opacity: 1,
    config: {
      duration: 600,
      precision: 0.5,
    },
    from: { transform: 'translateX(110%)' },
  }));

  useEffect(() => {
    setLeftDiv({
      transform: props.isOpen ? 'translateY(0)' : 'translateY(110%)',
      delay: !props.isOpen ? 500 : 0,
    });

    setRightDiv({
      transform: props.isOpen ? 'translateY(0)' : 'translateY(-110%)',
      delay: !props.isOpen ? 500 : 0,
    });

    setLeftImage({
      transform: props.isOpen ? 'translateX(100%)' : 'translateX(0%)',
      opacity: props.isOpen ? 1 : 0,
      delay: props.isOpen ? 400 : 0,
    });

    setRightImage({
      transform: props.isOpen ? 'translateX(0)' : 'translateX(110%)',
      opacity: props.isOpen ? 1 : 0,
      delay: props.isOpen ? 400 : 0,
    });
  }, [props.isOpen, setLeftDiv, setRightDiv, setRightImage, setLeftImage]);

  //!/////////////////////////

  const pagesTrail = useTrail(pages.length, {
    config: { duration: 500 },
    delay: props.isOpen ? 400 : 0,
    opacity: props.isOpen ? 1 : 0,
    transform: props.isOpen ? 'translateX(0%)' : 'translateX(-50%)',
    from: { opacity: 0, transform: 'translateX(-50%)' },
  });

  const footerItemsTrail = useTrail(footerItems.length, {
    config: { duration: 300 },
    delay: props.isOpen ? 550 : 150,
    opacity: props.isOpen ? 1 : 0,
    transform: props.isOpen ? 'translateY(-100%)' : 'translateY(100%)',
    from: { opacity: 0, transform: 'translateY(100%)' },
  });

  return (
    <Container>
      <LeftContainer style={LeftDiv}>
        <LeftDivTop>
          {pagesTrail.map((animationProps, i) => (
            <NavTopText style={animationProps} key={i}>
              <Link to={`${pages[i].to}`} onClick={props.clicked}>
                {pages[i].text}
              </Link>
            </NavTopText>
          ))}
        </LeftDivTop>
        <LeftDivBottom>
          {footerItemsTrail.map((animationProps, i) => (
            <NavBottomText style={animationProps} key={i}>
              <a
                href={footerItems[i].to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {footerItems[i].text}
              </a>
            </NavBottomText>
          ))}
        </LeftDivBottom>
      </LeftContainer>
      <RightContainer style={RightDiv}>
        <WordImage style={LeftImage} src={image1} alt="word" />
        <WordImage style={RightImage} src={image2} alt="word" />
      </RightContainer>
    </Container>
  );
};
