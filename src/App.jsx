import React from 'react'
import AppNavigator from './Navigator/AppNavigator'
import { Provider } from 'react-redux'
import { store } from './Redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
    )
}

export default App
