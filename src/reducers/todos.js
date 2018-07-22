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
          name: action.name,
          description: action.description
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, name: action.name, description: action.description } :
          todo
      )

    default:
      return state
  }
}