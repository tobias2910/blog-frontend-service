import React, { FC } from 'react';
import { IconType } from 'react-icons';

import s from './IconLink.module.css';

interface IconLinkProps {
  href: string;
  Icon: IconType
  Text: string;
}

/**
 *
 * @param {IconLinkProps}
 * @returns
 */
const IconLink: FC <IconLinkProps> = ({ href, Icon, Text }) => (
  <a
    href={href}
    className={s.root}
    target="_blank"
    rel="noreferrer"
    tabIndex={0}
  >
    <Icon className={s.root} />
    {Text}
  </a>
);

export default IconLink;
