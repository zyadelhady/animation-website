import React, { ReactChild, useState } from 'react';
import { NavIcon } from '../../components/NavIcon/NavIcon';
import { NavBar } from '../../components/NavBar/NavBar';
import { Transition } from 'react-transition-group';
import { Footer } from '../../components/Footer/Footer';

export interface LayoutProps {
  children: ReactChild;
}

export const Layout = (props: LayoutProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clicked = () => setIsOpen((prev) => !prev);

  const duration = 2000;

  return (
    <div>
      <NavIcon isOpen={isOpen} clicked={clicked} />
      <Transition mountOnEnter unmountOnExit in={isOpen} timeout={duration}>
        {() => <NavBar isOpen={isOpen} clicked={clicked} />}
      </Transition>
      <div style={{ zIndex: 20, position: 'relative' }}>{props.children}</div>
      <Footer />
    </div>
  );
};
