import React from 'react'

import Header from './components/Header.jsx'
import { Login } from './context/LoginContext.jsx'
import { Translation } from './context/TranslationContext.jsx'
import { Routers } from './router/routes.js'

function App () {
  return (
    <Translation>
      <Login>
        <Header />
        <Routers />
      </Login>
    </Translation>
  )
}

export default App
