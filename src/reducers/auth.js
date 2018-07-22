import { LOGIN_USER, REGISTER_USER } from '../constants/ActionTypes'

const initialState = {
  message: ''
}

export default function auth (state = initialState, action) => {
  switch (action.type) {
      
    case LOGIN_USER:
      return { 
        ...{
          message: action.message
        }
      };
        
    
    case REGISTER_USER:
      return [
        ...{
          message: action.message
        }
      ]

    default:
      return state
  }
}