import React, { FC, ReactNode } from 'react'
import cn from 'clsx'

import s from './Card.module.css'

interface CardProps {
  children: ReactNode
  className?: string
}

const Card: FC<CardProps> = ({ children, className }) => {
  const innerClassName = cn(s.root, className)

  return <div className={innerClassName}>{children}</div>
}

Card.defaultProps = {
  className: '',
}

export default Card
