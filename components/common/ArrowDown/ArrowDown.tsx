import React, { useContext } from 'react'
import { AiOutlineDownCircle } from 'react-icons/ai'
import cn from 'clsx'

import s from './ArrowDown.module.css'
import { ScrollContext } from '../../../lib/context/ScrollProvider'

const ArrowDown = () => {
  const scrollContext = useContext(ScrollContext)
  const className = cn(
    s.root,
    { [s.visible]: scrollContext.scrollY <= 20 },
    { [s.hidden]: scrollContext.scrollY >= 21 }
  )

  return <AiOutlineDownCircle className={className} />
}

export default ArrowDown
