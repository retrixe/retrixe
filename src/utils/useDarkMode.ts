import { useEffect, useState } from 'react'

const useDarkMode = (): boolean => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return

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
