import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './reducers'

export default function configureStore() {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(promiseMiddleware()),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  )
  /* eslint-enable */
  return store
}
