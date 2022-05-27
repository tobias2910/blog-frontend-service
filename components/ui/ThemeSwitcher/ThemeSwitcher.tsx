import React, {
  FC, useEffect, useState, ReactElement,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import Button from '../Button';

/**
 * Provides a styled button that can be used to switch
 * between the dark and light mode.
 *
 * @returns {ReactElement} - ThemeSwitcher component
 */
const ThemeSwitcher: FC = (): ReactElement => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure the component is mounted, to avoid hydration mismatch errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSwitchModeClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Button size="small" handleOnClick={handleSwitchModeClick}>
      {
      isMounted
        ? (
          <AnimatePresence>
            { theme === 'light'
              ? (
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.7 }}
                  animate={{ rotate: 370, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  title="Activate dark mode"
                >
                  <MoonIcon key="1" className="fill-teal-400 w-6 h-6" />
                </motion.div>
              )
              : (
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.7 }}
                  animate={{ rotate: 700 }}
                  transition={{ duration: 0.3 }}
                  title="Activate light mode"
                >
                  <SunIcon key="2" className="fill-teal-400 w-6 h-6" />
                </motion.div>
              )}
          </AnimatePresence>
        )
        : (
          <div className="animate-pulse flex w-6 h-6 justify-center items-center">
            <div className="rounded-full bg-teal-400 w-2 h-2" />
          </div>
        )
    }
    </Button>
  );
};

export default ThemeSwitcher;
