import { useEffect, useState } from 'react'

const useDarkMode = (): boolean => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (typeof window === 'undefined' || !window.matchMedia) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setDarkMode(mediaQuery.matches)
    const handleChange = (e: MediaQueryListEvent): void => {
      setDarkMode(e.matches)
    }
    mediaQuery.addEventListener('change', handleChange)
    return (): void => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return darkMode
}

export default useDarkMode
