import React, { FC } from 'react';
import { useRouter } from 'next/router';

import BarItem from '../../ui/BarItem';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

interface NavbarProps {
  navbarItems: string[];
}

const Navbar: FC<NavbarProps> = (props) => {
  const { navbarItems } = props;
  const router = useRouter();

  const handleItemOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const item = (event.target as HTMLButtonElement).id.toLowerCase();
    if (item === 'home') {
      router.push('./');
    } else {
      router.push(`./${item.toLowerCase()}`);
    }
  };

  return (
    <div className="flex top-0 sticky w-full justify-center backdrop-blur-md">
      <ul className="flex flex-row my-5">
        {navbarItems.map((item) => (
          <li key={item} className="ml-10 mr-10">
            <BarItem
              text={item}
              handleOnClick={handleItemOnClick}
            />
          </li>
        ))}
      </ul>
      <div className="my-5">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
