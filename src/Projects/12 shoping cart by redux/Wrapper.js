import React from 'react'
import { Main } from './Main'
import { Provider } from 'react-redux'
import { store } from './redux/Store'

const Wrapper = () => {
  return (
    <div>
    <Provider store={store}>

        <Main/>
    </Provider>
    </div>
  )
}

export default Wrapper