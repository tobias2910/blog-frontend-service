import React, { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';
import s from './BarItem.module.css';

interface BarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  selected?: boolean;
  handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * This component provides an styled item that can be used in the navigation
 * bar.
 *
 * @param {BarItemProps} props - The properties containing the text of the item.
 *                               the onClick handler and optional also the flag
 *                               whether, the current item is selected or not.
 * @returns {BarItem} - An item that can be used in the navigation bar
 */
const BarItem: FC <BarItemProps> = (props) => {
  const { text, selected, handleOnClick } = props;
  const className = cn(s.root, { [s.selected]: selected });

  return (
    <button
      id={text}
      className={className}
      onClick={handleOnClick}
      type="button"
      aria-label={text}
      tabIndex={0}
    >
      {text}
    </button>
  );
};

BarItem.defaultProps = {
  selected: false,
};

export default BarItem;
