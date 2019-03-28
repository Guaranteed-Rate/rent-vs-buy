import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'

export default (initialState = {}) => /* istanbul ignore next */ {
  const browserHistory = createHistory()
  // ======================================================
  // Middleware Configuration
  // ======================================================

  const middleware = [
    thunk,
    routerMiddleware(browserHistory),
  ]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const init_reducers = {
    router: connectRouter(browserHistory),
  }
  const store = createStore(
    combineReducers(init_reducers),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = init_reducers
  store.history = browserHistory

  return store
}
