import React, { FC } from 'react';
import NavigationItems from '../NavigationItems';

interface DrawerProps {
  isOpen: boolean;
  navItems: string[];
}

const Drawer: FC<DrawerProps> = ({ isOpen, navItems }) => (
  <div className="w-56 fixed flex md:hidden">
    {isOpen
      ? (
        <div className="h-screen backdrop-blur-md animate-fadeIn-left">
          <NavigationItems alignment="left" items={navItems} />
        </div>
      ) : null}
  </div>
);

export default Drawer;
