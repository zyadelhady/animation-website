import React, { FC, useState } from 'react';
import { Container, FixedContainer, LinksContainer } from './styled';

export interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
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

  return (
    <Container>
      <FixedContainer>
        <p>Don't be shy,</p>
        <br /> <span>say Hi.</span>
        <br />
        <br />
        <br />
        <br />
        <LinksContainer>
          {footerItems.map((i) => {
            return (
              <a href={i.to} target="_blank" rel="noopener noreferrer">
                {i.text}
              </a>
            );
          })}
        </LinksContainer>
      </FixedContainer>
    </Container>
  );
};
