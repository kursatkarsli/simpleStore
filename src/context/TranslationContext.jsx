import i18next from 'i18next'
import React, { createContext, useEffect } from 'react'
import { addToLocalStorage } from '../components/helper/addToLocalStorage'

export const TranslationContext = createContext()

export const Translation = ({ children }) => {
  const handleChangeLanguage = (language) => {
    addToLocalStorage('language', language)
    i18next.changeLanguage(language)
  }

  return (
    <TranslationContext.Provider value={{ handleChangeLanguage }}>
      {children}
    </TranslationContext.Provider>
  )
}
