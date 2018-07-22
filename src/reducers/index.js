import { combineReducers } from 'redux'
import todos from './todos'
import auth from './auth'

const rootReducer = combineReducers({
  todos : todos,
  auth: auth
})

export default rootReducer