import React, { FC, useState } from 'react';
import DrawerToggle from '../../ui/DrawerToggle';

const Drawer: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DrawerToggle handleClick={handleClick} isOpen={isOpen} />
  );
};

export default Drawer;
