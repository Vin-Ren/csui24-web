// useLocalStorageSet.ts
import { useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useLocalStorageSet(key: string, initialValue: Set<string>) {
  // Store as an array, hydrate into a Set
  const [rawArray, setRawArray] = useLocalStorage<string[]>(
    key,
    Array.from(initialValue)
  )

  const set = useMemo(() => new Set(rawArray), [rawArray])

  const setSet = (updater: (prev: Set<string>) => Set<string>) => {
    const updated = updater(set)
    setRawArray(Array.from(updated))
  }

  return [set, setSet] as const
}
