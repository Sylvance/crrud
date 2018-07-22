import Axios from 'axios';

import authHeader from './authHeader'
import * as actions from '../actions/Actions'

const apiUrl = 'https://localhost:3000/';

export const getTodos = (userid) => {
  if (userid) {
    url = `${apiUrl}${'users/'}${userid}${'/todos'}`
  } else {
    url = `${apiUrl}${'todos'}`
  }
  return (dispatch) => {
    return Axios({
        method: 'get',
        url: url,
        headers: authHeader()
      })
      .then(response => {
        dispatch(actions.getTodos(response.data))
      })
      .catch(error => {
        console.log('error')
      });
  };
};

export const addTodo = (todo) => {
  return (dispatch) => {
    return Axios({
        method: 'post',
        url: `${apiUrl}${'todos'}`,
        data: todo,
        headers: authHeader()
      })
      .then(response => {
        dispatch(actions.addTodo(response.data))
      })
      .catch(error => {
        console.log('error')
      });
  };
};

export const editTodo = (userid, todo) => {
  return (dispatch) => {
    return Axios({
        method: 'put',
        url: `${apiUrl}${'users/'}${userid}${'/todos/'}${todo.id}`, 
        data: todo,
        headers: authHeader()
      })
      .then(response => {
        dispatch(actions.editTodo(response.data))
      })
      .catch(error => {
        console.log('error')
      });
  };
};


export const deleteTodo = (userid, todo) => {
  return (dispatch) => {
    return Axios({
            method: 'delete',
            url: `${apiUrl}${'users/'}${userid}${'/todos/'}${todo.id}`,
            headers: authHeader()
      })
      .then(response => {
        dispatch(actions.deleteTodo(response.data))
      })
      .catch(error => {
        console.log('error')
      });
  };
};
