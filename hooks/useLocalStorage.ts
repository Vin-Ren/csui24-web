import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue)
  const [hasHydrated, setHasHydrated] = useState(false)

  // Load from localStorage after mount
  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const stored = localStorage.getItem(key)
      if (stored !== null) {
        const parsed = JSON.parse(stored)
        setValue(parsed)
      }
    } catch (err) {
      console.error(`useLocalStorage: Failed to load ${key}`, err)
    }

    setHasHydrated(true)
  }, [key])

  // Save to localStorage when value changes (after hydration)
  useEffect(() => {
    if (typeof window === 'undefined' || !hasHydrated) return

    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.error(`useLocalStorage: Failed to save ${key}`, err)
    }
  }, [key, value, hasHydrated])

  return [value, setValue] as const
}