import i18next from 'i18next'
import React, { createContext } from 'react'

export const TranslationContext = createContext()

export const Translation = ({ children }) => {
  const handleChangeLanguage = (language) => {
    i18next.changeLanguage(language)
  }
  return (
    <TranslationContext.Provider value={{ handleChangeLanguage }}>
      {children}
    </TranslationContext.Provider>
  )
}
