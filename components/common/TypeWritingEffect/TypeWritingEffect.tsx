import React, { FC, HTMLAttributes } from 'react';
import cn from 'clsx';
import s from './TypeWritingEffect.module.css';

import useTypeWritingEffect, { EventStatus } from '../../../lib/hooks/useTypeWritingEffect';

interface TypeWritingEffectProps extends HTMLAttributes<HTMLSpanElement> {
  wordList: string[],
  typingInterval: number,
  deletingInterval: number,
  pausingDuration: number,
  infinite?: boolean,
  className?: string
}

/**
 *
 * @param param0
 * @returns
 */
const TypeWritingEffect: FC<TypeWritingEffectProps> = ({
  wordList,
  typingInterval,
  deletingInterval,
  pausingDuration,
  infinite,
  className,
}) => {
  const typeWriteResult = useTypeWritingEffect(
    wordList,
    typingInterval,
    deletingInterval,
    pausingDuration,
    infinite,
  );

  const innerClassName = cn(
    s.root,
    { [s.pausing]: typeWriteResult.eventStatus === EventStatus.Pausing },
    className,
  );

  return (
    <span className={innerClassName}>{typeWriteResult.typedWord}</span>
  );
};

TypeWritingEffect.defaultProps = {
  infinite: true,
  className: '',
};

export default TypeWritingEffect;
