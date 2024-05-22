import { useEffect, useState } from 'react'

/**
 * 修改localStorage的hook
 * setStorageValue修改后自动同步到localStorage,当设置为null时会清空该localStorage的值
 * @param key 在localStorage中的key
 * @param initialValue 初始值，如果localstorage中有值则不会使用这个值
 * @returns storageValue: 存储的值;setStorageValue: 修改localStorage的值,异步方法
 */
export const uesLocalStorage = <T>(key: string, initialValue?: T) => {
  const [storageValue, setValue] = useState(() => {
    const item = localStorage.getItem(key)
    if (item) {
      return JSON.parse(item)
    }
    return initialValue ? initialValue : null
  })
  const setStorageValue = (value: T) => {
    return new Promise((resolve) => {
      setValue(value)
      setTimeout(() => {
        resolve(1)
      }, 0)
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
