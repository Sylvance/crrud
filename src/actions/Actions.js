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
  todos
})
​
export const addTodo = makeActionCreator(types.ADD_TODO, 'title', 'description')
export const editTodo = makeActionCreator(types.EDIT_TODO, 'id', 'title', 'description')
export const removeTodo = makeActionCreator(types.REMOVE_TODO, 'id')

export const loginUser = makeActionCreator(types.LOGIN_USER, 'token', 'userid', 'message' )
export const registerUser = makeActionCreator(types.REGISTER_USER, 'message')
