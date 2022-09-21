import React, { FC } from 'react'
import { motion, Variants } from 'framer-motion'

interface PathProps {
  variants?: Variants
  d?: string
  transition?: any
}

const Path: FC<PathProps> = ({ variants, d, transition }) => (
  <motion.path
    strokeWidth="3"
    strokeLinecap="round"
    variants={variants}
    d={d}
    transition={transition}
  />
)

Path.defaultProps = {
  variants: {},
  d: '',
  transition: { duration: 0.2 },
}

export default Path
