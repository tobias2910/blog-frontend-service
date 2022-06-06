import React, {
  cloneElement, FC, ReactElement, useEffect, useRef,
} from 'react';

interface ClickAwayListenerProps {
  active?: boolean;
  children: ReactElement;
  onOutsideClick: (event?: MouseEvent) => void;
}

/**
 * This component provides the functionality to register for
 * clicking outside of the provided children element. In case
 * the event is being triggered, it executes the provided handler.
 *
 * @param {ClickAwayListenerProps} - Expects the children elements
 *                                   and the event handler. Optionally
 *                                   you can also provide an flag, whether
 *                                   to activate the listener or not.
 * @returns {ReactElement} - The ClickAwayListener element
 */
const ClickAwayListener: FC<ClickAwayListenerProps> = (props) => {
  const { active, onOutsideClick, children } = props;
  const innerRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: MouseEvent | TouchEvent) => {
    if (innerRef.current && !innerRef.current.contains(event.target as Node)) {
      onOutsideClick();
    }
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onOutsideClick();
    }
  };

  useEffect(() => {
    if (active) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('touchstart', handleClick);
      document.addEventListener('keydown', handleKeydown);
    }

    return () => {
      if (active) {
        document.removeEventListener('mousedown', handleClick);
        document.removeEventListener('touchstart', handleClick);
        document.removeEventListener('keydown', handleKeydown);
      }
    };
  });

  return (
    <>
      {cloneElement(children, { ref: innerRef })}
    </>
  );
};

ClickAwayListener.defaultProps = {
  active: true,
};

export default ClickAwayListener;
