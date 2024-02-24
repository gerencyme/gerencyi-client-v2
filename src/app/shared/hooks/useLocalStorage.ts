'use client'

export const useLocalStorage = () => {
  const STORAGE_KEY = 'GerencyI:'

  const getLocalStorage = (key: string) => {
    const data = window.localStorage.getItem(`${STORAGE_KEY}${key}`)

    return JSON.parse(data!)
  }

  const setLocalStorage = (key: string, value: unknown) => {
    const data = JSON.stringify(value)

    return window.localStorage.setItem(`${STORAGE_KEY}${key}`, data)
  }

  const deleteFromStorage = (key: string) => {
    return window.localStorage.removeItem(`${STORAGE_KEY}${key}`)
  }

  return {
    getLocalStorage,
    setLocalStorage,
    deleteFromStorage,
    STORAGE_KEY,
  }
}
