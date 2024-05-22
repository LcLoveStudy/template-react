import { useEffect, useState } from 'react'

/**
 * 修改localStorage的hook
 * @param key 在localStorage中的key
 * @param initialValue 初始值，如果localstorage中有值则不会使用这个值
 * @returns storageValue: 存储的值;setStorageValue: 修改localStorage的值,异步方法
 */
export const uesLocalStorage = <T>(key: string, initialValue?: T) => {
  const [storageValue, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue ? initialValue : ''
    }
  })
  const setStorageValue = (value: T) => {
    return new Promise((resolve) => {
      setValue(value)
      resolve(1)
    })
  }
  useEffect(() => {
    if (storageValue) {
      localStorage.setItem(key, JSON.stringify(storageValue))
    } else {
      localStorage.removeItem(key)
    }
  }, [storageValue])
  return {
    storageValue,
    setStorageValue
  }
}
