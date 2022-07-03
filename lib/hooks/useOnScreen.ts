import { RefObject, useEffect, useState } from 'react';
/**
 * This hook checks whether the specified element is visible within the
 * current viewport. It is not checked, whether the whole element is visible,
 * but if at least the top is visible.
 *
 * @param {T extends HTMLElement} ref - The element to observe
 * @param {boolean} fireOnes - Flag that determines, whether the hook should
 *                             only fire ones
 * @returns {boolean} - Flag that indicates, whether the element
 *                      is on the screen
 */
const useOnScreen = <T extends HTMLElement>(ref: RefObject<T>, fireOnes?: boolean): boolean => {
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
