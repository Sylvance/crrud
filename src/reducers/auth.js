import { LOGIN_USER, REGISTER_USER } from '../constants/ActionTypes'

const initialState = {
  message: '',
  user: ''
}

export default function auth (state = initialState, action) {
  switch (action.type) {
      
    case LOGIN_USER:
      return { 
        ...{
          message: action.message,
          user: action.user
        }
      };
        
    
    case REGISTER_USER:
      return [
        ...{
          message: action.message,
          user: action.user
        }
      ]

    default:
      return state
  }
}