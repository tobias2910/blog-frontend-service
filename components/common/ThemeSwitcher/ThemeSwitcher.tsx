import React, {
  FC, useEffect, useState, ReactElement,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

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
    <div
      className="rounded border border-teal-400 w-10 h-10 flex justify-center items-center"
      onClick={handleSwitchModeClick}
      role="button"
      tabIndex={0}
    >
      {
      isMounted
        ? (
          <AnimatePresence>
            { theme === 'light'
              ? (
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.7 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <MdDarkMode title="Activate dark mode" key="1" className="fill-teal-400 w-6 h-6" />
                </motion.div>
              )
              : (
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.7 }}
                  animate={{ rotate: 700 }}
                  transition={{ duration: 0.3 }}
                >
                  <MdLightMode title="Activate light mode" key="2" className="fill-teal-400 w-6 h-6" />
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
    </div>
  );
};

export default ThemeSwitcher;
