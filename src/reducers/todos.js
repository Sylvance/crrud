import { GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constants/ActionTypes'

const initialState = [
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return [ ...action.todos ]
      
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description
        }
      ]

    case DELETE_TODO:
      return state.filter(category =>
        category.id !== action.id
      )

    case EDIT_TODO:
      return state.map(category =>
        category.id === action.id ?
          { ...category, title: action.title, description: action.description } :
          category
      )

    default:
      return state
  }
}