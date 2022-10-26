import React, { FC, ReactNode } from 'react';
import cn from 'clsx';

import s from './Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClickHandler?: () => void;
}

const Card: FC<CardProps> = ({ children, className, onClickHandler }) => {
  const innerClassName = cn(s.root, className, {
    [s.clickable]: onClickHandler,
  });

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={innerClassName} onClick={onClickHandler}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  className: '',
  onClickHandler: undefined,
};

export default Card;
