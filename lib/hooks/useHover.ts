import { RefObject, useState } from 'react';

/**
 * This hook observes the provided element for the 'mouseenter'
 * and 'mouseleave' events, which can be used to validate,
 * whether the user hovers over it or not.
 *
 * @param {T extends HTMLElement} ref - The element to observe.
 * @returns {boolean} - The flag that indicates, whether the
 *                      element is being hovered or not
 */
const useHover = <T extends HTMLElement> (ref: RefObject<T>): boolean => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (ref.current) {
    ref.current.addEventListener('mouseenter', handleMouseEnter);
    ref.current.addEventListener('mouseleave', handleMouseLeave);
  }

  return isHovered;
};

export default useHover;
