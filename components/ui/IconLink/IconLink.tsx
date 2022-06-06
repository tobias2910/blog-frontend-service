import React, { FC } from 'react';
import { IconType } from 'react-icons';
import cn from 'clsx';

import s from './IconLink.module.css';

interface IconLinkProps {
  href: string;
  Icon: IconType
  Text: string;
};

/**
 * 
 * @param param0 
 * @returns 
 */
const IconLink: FC <IconLinkProps> = ({href, Icon, Text}) => {
  const className = cn(s.root);

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noreferrer">
      <Icon className={className} />
      {Text}
    </a>
  )
};

export default IconLink;
