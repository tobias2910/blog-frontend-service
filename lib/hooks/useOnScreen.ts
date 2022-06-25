import { RefObject, useEffect, useState } from 'react';
/**
 *
 * @param ref
 * @param fireOnes
 * @returns
 */
const useOnScreen = (ref: RefObject<HTMLElement>, fireOnes?: boolean) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(
    () => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      });

      if (ref.current) observer.observe(ref.current);
      if (isIntersecting && fireOnes) observer.disconnect();
      return () => observer.disconnect();
    },
  );

  return isIntersecting;
};

export default useOnScreen;
