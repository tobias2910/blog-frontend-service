import React, {
  createContext,
  FC,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from 'react'

interface State {
  scrollY: number
}

interface ScrollProviderProps {
  children: ReactNode
}

export const ScrollContext = createContext<State>({ scrollY: 0 })

/**
 * A hook that is returning the current horizontal
 * coordinates.
 *
 * @returns {number} - The current horizontal coordinate
 */
const ScrollProvider: FC<ScrollProviderProps> = (props) => {
  const { children } = props
  const [scrollY, setScrollY] = useState(0)

  const handleScrollEvent = useCallback((event: Event) => {
    setScrollY((event.target as Document).documentElement.scrollTop)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScrollEvent, { passive: true })

    return () => document.removeEventListener('scroll', handleScrollEvent)
  })

  const value = useMemo(() => ({ scrollY }), [scrollY])

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ScrollContext.Provider value={value} {...props}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollProvider
