import React, { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import NavigationItems from '../NavigationItems';

interface DrawerProps {
  isOpen: boolean;
  navItems: string[];
}

const Drawer: FC<DrawerProps> = ({ isOpen, navItems }) => {
  const nodeRef = useRef(null);
  return (
    <div className="w-40 fixed flex md:hidden z-[1]">
      <CSSTransition
        nodeRef={nodeRef}
        classNames={{
          enter: 'animate-fadeIn-left',
          exit: 'animate-fadeOut-left',
        }}
        unmountOnExit
        in={isOpen}
        timeout={200}
      >
        <div ref={nodeRef} className="h-screen backdrop-blur-md">
          <NavigationItems alignment="left" items={navItems} />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Drawer;
