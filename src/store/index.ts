import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const middleware = []

const sagaMiddleware = createSagaMiddleware()

const history = createBrowserHistory()

middleware.push(sagaMiddleware)
middleware.push(createLogger())

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
)
const configureStore = () => {
  return { store, history }
}

sagaMiddleware.run(rootSaga)

export default configureStore
