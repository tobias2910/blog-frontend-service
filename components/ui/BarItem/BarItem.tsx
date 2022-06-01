import React, { ButtonHTMLAttributes, FC } from 'react';
import cn from 'clsx';
import s from './BarItem.module.css';

type UnderlineTypes = 'middle' | 'left';
type TextSize = 'small' | 'big';

interface BarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  selected?: boolean;
  underlineType?: UnderlineTypes;
  textSize?: TextSize;
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
  const {
    text, selected, underlineType, textSize, handleOnClick,
  } = props;
  const className = cn(
    s.root,
    { [s.selected]: selected },
    { [s.big]: textSize === 'big' },
    { [s.small]: textSize === 'small' },
    { [s.middleUnderline]: underlineType === 'middle' },
    { [s.leftUnderline]: underlineType === 'left' },
  );

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
  textSize: 'big',
  underlineType: 'middle',
};

export default BarItem;
