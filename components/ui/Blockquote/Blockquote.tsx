import React, { FC, ReactNode } from 'react';
import s from './Blockquote.module.css';

interface BlockquoteProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

/**
 *
 * @param param0
 * @returns
 */
const Blockquote: FC<BlockquoteProps> = ({ children }) => (
  <div className={s.root}> {children}</div>
);

export default Blockquote;
