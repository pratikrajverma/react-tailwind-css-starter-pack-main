import React from 'react'
import Main from './Main'
import { AppContextProvider } from './context/appContext'

const Wrapper = () => {
  return (
    <div>
        <AppContextProvider>
          <Main />
        </AppContextProvider>
  
    </div>
  )
}

export default Wrapper