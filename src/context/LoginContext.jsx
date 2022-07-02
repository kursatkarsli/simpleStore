import i18next from 'i18next'
import React, { createContext, useEffect, useState } from 'react'
import { getDataFromLocalStorage } from '../components/helper/getFromLocalStorage'

export const LoginContext = createContext()

export const Login = ({ children }) => {
  const [login, setLogin] = useState(false)
  useEffect(() => {
    setLogin(getDataFromLocalStorage('isUserLogIn'))
  }, [login])
  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  )
}
