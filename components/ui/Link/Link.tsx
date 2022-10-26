import React, { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import { Url } from 'url';

import s from './Link.module.css';

interface LinkProps {
  as?: Url;
  href: string;
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

/**
 *
 * @param param0
 * @returns
 */
const Link: FC<LinkProps> = ({ as, href, children }) => (
  <NextLink as={as} href={href}>
    <a target="_blank" rel="noreferrer" className={s.root}>
      {children}
    </a>
  </NextLink>
);

Link.defaultProps = {
  as: undefined,
};

export default Link;
