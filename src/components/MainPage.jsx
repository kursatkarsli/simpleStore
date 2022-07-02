import React from 'react'
import { Outlet } from 'react-router-dom'
import { Information } from '../context/informationContext.jsx'
import { Favorites } from '../context/favoritesContext'
import { Basket } from '../context/BasketContext'

function MainPage() {
  return (
    <Information>
      <Favorites>
        <Basket>
          <Outlet />
        </Basket>
      </Favorites>
    </Information>
  )
}

export default MainPage
