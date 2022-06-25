import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import Path from '../Path';

interface DrawerToggleProps {
  isOpen: boolean;
  handleClick: () => void;
}

/**
 *
 * @param {DrawerToggleProps} -
 * @returns {ReactElement} -
 */
const DrawerToggle: FC<DrawerToggleProps> = ({ handleClick, isOpen }) => (
  <Button handleOnClick={handleClick} size="small">
    <motion.div animate={isOpen ? 'open' : 'closed'} whileHover={{ scale: 1.20 }} whileTap={{ scale: 0.80 }}>
      <svg viewBox="0 -2 20 23" className="stroke-secondary w-5 h-5">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </motion.div>
  </Button>
);

export default DrawerToggle;
