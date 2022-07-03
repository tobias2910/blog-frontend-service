import { useState, useEffect } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

type MediaQuerySizes = 'sm' | 'md' | 'lg' | 'xl';

/**
 * This hook provides the information, whether the window reached
 * specified state based on the Tailwind configuration.
 *
 * @param {MediaQuerySizes} mediaQuerySize - The size to check for.
 * @returns {boolean} - Flag that indicates, whether the small
 *                      media query was reached.
 */
const useMediaQuery = (mediaQuerySize: MediaQuerySizes): boolean => {
  // @ts-ignore
  const fullConfig = resolveConfig(tailwindConfig);
  // @ts-ignore
  const [smallBreakpoint] = useState<string>(fullConfig.theme.screens[mediaQuerySize]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isSmallBreakpoint, setIsSmallBreakpoint] = useState(false);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  });

  useEffect(() => {
    const smallBreakpointNr: any = smallBreakpoint.split('px')[0];
    if (windowWidth <= smallBreakpointNr) {
      setIsSmallBreakpoint(true);
    } else {
      setIsSmallBreakpoint(false);
    }
  }, [windowWidth, smallBreakpoint]);

  return isSmallBreakpoint;
};

export default useMediaQuery;
