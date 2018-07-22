import * as types from '../constants/ActionTypes'

function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export const getTodos = (todos) => ({
  type: types.GET_TODOS,
  todos: todos
})
export const addTodo = makeActionCreator(types.ADD_TODO, 'name', 'description')
export const editTodo = makeActionCreator(types.EDIT_TODO, 'id', 'name', 'description')
export const deleteTodo = makeActionCreator(types.DELETE_TODO, 'id')

export const loginUser = makeActionCreator(types.LOGIN_USER, 'token', 'userid', 'message' )
export const registerUser = makeActionCreator(types.REGISTER_USER, 'message')
