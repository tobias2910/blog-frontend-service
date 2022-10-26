import React, { FC, ReactNode } from 'react';
import s from './List.module.css';

interface ListProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

const List: FC<ListProps> = ({ children }) => (
  <li className={s.root}>{children}</li>
);

export default List;
