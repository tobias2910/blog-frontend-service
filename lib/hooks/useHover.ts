import { RefObject, useEffect, useState } from 'react'

/**
 * This hook observes the provided element for the 'mouseenter'
 * and 'mouseleave' events, which can be used to validate,
 * whether the user hovers over it or not.
 *
 * @param {T extends HTMLElement} ref - The element to observe.
 * @returns {boolean} - The flag that indicates, whether the
 *                      element is being hovered or not
 */
const useHover = <T extends HTMLElement>(ref: RefObject<T>): boolean => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  useEffect(() => {
    const outerRef = ref.current

    if (outerRef) {
      outerRef.addEventListener('mouseenter', handleMouseEnter)
      outerRef.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      outerRef?.removeEventListener('mouseenter', handleMouseEnter)
      outerRef?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref])

  return isHovered
}

export default useHover
