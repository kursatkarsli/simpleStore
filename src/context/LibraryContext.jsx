import i18next from 'i18next'
import React, { createContext, useEffect, useState } from 'react'
import { getDataFromLocalStorage } from '../components/helper/getFromLocalStorage'

export const LibraryContext = createContext()

export const Library = ({ children }) => {
  const [library, setLibrary] = useState()
  const [categoryInput, setCategoryInput] = useState('')

  useEffect(() => {
    setLibrary(
      getDataFromLocalStorage('games')?.filter((item) => item.inBasket === true)
    )
  }, [])
  return (
    <LibraryContext.Provider
      value={{ library, setLibrary, categoryInput, setCategoryInput }}
    >
      {children}
    </LibraryContext.Provider>
  )
}
