import thunk from 'redux-thunk'
import reducer from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store