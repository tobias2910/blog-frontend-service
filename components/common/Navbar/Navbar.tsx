import React, { FC } from 'react';

import ThemeSwitcher from '../../ui/ThemeSwitcher';
import DrawerToggle from '../../ui/DrawerToggle';
import NavigationItems from '../NavigationItems';

interface NavbarProps {
  navbarItems: string[];
  drawerIsOpen: boolean;
  handleDrawerToggle: () => void;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { navbarItems, drawerIsOpen, handleDrawerToggle } = props;

  return (
    <div className="flex justify-center top-0 sticky w-full">
      <div className="max-w-3xl w-full">
        <div className="flex w-full backdrop-blur-md">
          <NavigationItems items={navbarItems} alignment="middle" />
          <div className="my-3 mx-2 block md:hidden">
            <DrawerToggle handleClick={handleDrawerToggle} isOpen={drawerIsOpen} />
          </div>
          <div className="my-3 mx-2 w-full h-full flex justify-end md:w-fit">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
