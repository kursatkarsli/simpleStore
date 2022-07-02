import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { addToLocalStorage } from '../components/helper/addToLocalStorage'
import { getDataFromLocalStorage } from '../components/helper/getFromLocalStorage'
import { Library } from './LibraryContext'

export const InformationContext = createContext()

export const Information = ({ children }) => {
  const [isLoading, setIsLoading] = useState([])
  const [InputValue, setInputValue] = useState('')
  const [categoryInputValue, setCategoryInputValue] = useState('')
  const [inputType, setInputType] = useState('')

  useEffect(() => {
    ;(async function getDataFromJSON() {
      const response = await axios.get('simple_game_store_db.json')
      const data = await response.data

      addToLocalStorage(
        'games',
        data.map((item) => ({
          ...item,
          inBasket:
            getDataFromLocalStorage('games')?.find(
              (game) => game.Id === item.Id
            ).inBasket === true,

          isFavorite:
            getDataFromLocalStorage('games')?.find(
              (game) => game.Id === item.Id
            ).isFavorite === true,
        }))
      )

      setIsLoading(!isLoading)
    })()
  }, [])

  return (
    <InformationContext.Provider
      value={{
        isLoading,
        InputValue,
        setIsLoading,
        setInputValue,
        inputType,
        setInputType,
        categoryInputValue,
        setCategoryInputValue,
      }}
    >
      <Library>{children}</Library>
    </InformationContext.Provider>
  )
}
