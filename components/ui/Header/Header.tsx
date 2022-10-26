import React, { FC, ReactNode } from 'react';
import Divider from '@components/ui/Divider';
import s from './Header.module.css';

interface HeaderProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

/**
 *
 * @param param0
 * @returns
 */
const FirstHeader: FC<HeaderProps> = ({ children }) => (
  <div className={s.root}>
    <h1 className={s.firstHeader}> {children}</h1>
    <Divider />
  </div>
);

/**
 *
 * @param param0
 * @returns
 */
const SecondHeader: FC<HeaderProps> = ({ children }) => (
  <div className={s.root}>
    <h1 className={s.secondHeader}> {children}</h1>
    <Divider />
  </div>
);

export { FirstHeader, SecondHeader };
