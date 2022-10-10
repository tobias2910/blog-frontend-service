import React, { FC, useState } from 'react';
import { IconType } from 'react-icons';

import cn from 'clsx';

import s from './Chip.module.css';

type IconSize = 'small' | 'medium' | 'large';
type ChipType = 'filter' | 'standard';

interface ChipProps {
  text: string;
  Icon: IconType;
  type?: ChipType;
  iconSize?: IconSize;
}

/**
 * @TODO Filter handling :(
 * @param param0
 * @returns
 */
const Chip: FC<ChipProps> = ({ text, Icon, type, iconSize }) => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(!isActive);
  };

  const containerClassName = cn(s.root, {
    [s.inactive]: isActive,
    [s.standard]: type === 'standard',
  });

  const iconClassName = cn({
    [s.largeIcon]: iconSize === 'large',
    [s.mediumIcon]: iconSize === 'medium',
    [s.smallIcon]: iconSize === 'small',
  });

  return (
    <div
      className={containerClassName}
      onClick={type === 'filter' ? handleOnClick : undefined}
      role="button"
      tabIndex={0}
    >
      <Icon className={iconClassName} />
      <span className="text-center m-auto">{text}</span>
    </div>
  );
};

Chip.defaultProps = {
  iconSize: 'medium',
  type: 'standard',
};

export default Chip;
