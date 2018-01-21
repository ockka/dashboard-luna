import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import HomeContainer from './containers/Home'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <HomeContainer />
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
