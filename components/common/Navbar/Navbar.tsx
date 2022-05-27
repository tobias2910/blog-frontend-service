import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import BarItem from '../../ui/BarItem';
import ThemeSwitcher from '../../ui/ThemeSwitcher';
import Drawer from '../Drawer';

interface NavbarProps {
  navbarItems: string[];
}

const Navbar: FC<NavbarProps> = (props) => {
  const { navbarItems } = props;
  const router = useRouter();

  const isSelected = (barItemName: string) => (
    !!(router.asPath.includes(barItemName.toLowerCase()) || (router.asPath === '/' && barItemName === 'Home'))
  );

  const handleItemOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const item = (event.target as HTMLButtonElement).id.toLowerCase();
    if (item === 'home') {
      router.push('./');
    } else {
      router.push(`./${item.toLowerCase()}`);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-3xl w-full">
        <div className="flex top-0 sticky w-full backdrop-blur-md">
          <ul className="w-full hidden my-5 justify-between md:flex">
            {navbarItems.map((item, idx) => (
              <li key={item} className="">
                <motion.div
                  initial={{ y: -100, opacity: 1 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                >
                  <BarItem
                    text={item}
                    handleOnClick={handleItemOnClick}
                    selected={isSelected(item)}
                  />
                </motion.div>
              </li>
            ))}
          </ul>
          <div className="my-5 mx-2 block md:hidden">
            <Drawer />
          </div>
          <div className="my-5 mx-2 w-full flex justify-end md:w-fit">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
