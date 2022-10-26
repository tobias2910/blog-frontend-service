import React, { FC, ReactNode, useRef } from 'react';
import cn from 'clsx';

import useOnScreen from '../../../utils/hooks/useOnScreen';
import s from './StyledParagraph.module.css';

interface StyledParagraphProps {
  children: ReactNode;
  fireOnes?: boolean;
  className?: string;
}

// const showFullOpacity = (scrollProgress: number, top: number, height: number) => (
//   (scrollProgress >= top && scrollProgress <= (top + height)) ? 99 : 20
// );

/**
 *
 * @param {StyledParagraphProps} -
 * @returns {ReactElement} -
 */
const StyledParagraph: FC<StyledParagraphProps> = ({
  children,
  fireOnes,
  className,
}) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const isOnScreen = useOnScreen(paragraphRef, fireOnes);

  const innerClassName = cn(
    s.root,
    { [s.showParagraph]: isOnScreen },
    className
  );

  return (
    <p ref={paragraphRef} className={innerClassName}>
      {children}
    </p>
  );
};

StyledParagraph.defaultProps = {
  fireOnes: true,
  className: '',
};

export default StyledParagraph;
