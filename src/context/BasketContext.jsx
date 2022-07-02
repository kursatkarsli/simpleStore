import React, { createContext, useContext, useState } from 'react'
import { addToLocalStorage } from '../components/helper/addToLocalStorage'
import { getDataFromLocalStorage } from '../components/helper/getFromLocalStorage'
import { InformationContext } from './informationContext'

export const BasketContext = createContext()

export const Basket = ({ children }) => {
  const { setIsLoading, isLoading } = useContext(InformationContext)

  const addToBasket = (game) => {
    addToLocalStorage(
      'games',
      getDataFromLocalStorage('games').map((singleGame) =>
        singleGame.Id === game.Id
          ? { ...singleGame, inBasket: true }
          : singleGame
      )
    )
    setIsLoading(!isLoading)
  }
  const removeFromBasket = (game) => {
    addToLocalStorage(
      'games',
      getDataFromLocalStorage('games').map((singleGame) =>
        singleGame.Id === game.Id
          ? { ...singleGame, inBasket: false }
          : singleGame
      )
    )
    setIsLoading(!isLoading)
  }

  return (
    <BasketContext.Provider value={{ addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  )
}
