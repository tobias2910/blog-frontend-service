import React, { FC, ReactElement } from 'react'
import cn from 'clsx'
import s from './Button.module.css'

type ButtonSizes = 'small' | 'medium' | 'large'

interface ButtonProps {
  children: ReactElement
  handleOnClick: (e?: any) => void
  size?: ButtonSizes
  ariaLabel?: string
}

/**
 * Returns a styled button.
 *
 * @param {ButtonProps} props - The button props
 * @returns {ReactElement} - The styled button
 */
const Button: FC<ButtonProps> = ({
  children,
  handleOnClick,
  size,
  ariaLabel,
}): ReactElement => {
  const className = cn(s.root, s[size!])

  return (
    <button
      className={className}
      onClick={handleOnClick}
      tabIndex={0}
      type="button"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: 'medium',
  ariaLabel: 'Button',
}

export default Button
