import Axios from 'axios'

import * as actions from '../actions/Actions'
import authHeader from './authHeader.js'

const apiUrl = 'http://localhost:4000/'

export const loginUser = (loginInfo) => (dispatch) => {
  return Axios({
      method: 'post',
      url: `${apiUrl}${'authenticate'}`,
      data: loginInfo
    })
    .then(response => {
      dispatch(actions.loginUser(response.data))
      localStorage.setItem('token', JSON.stringify(response.data.auth_token))
      window.location.assign('/todos');
    })
    .catch(error => {
      console.log('error')
    })
}

export const logoutUser = () => {
  return Axios({
      method: 'get',
      url: `${apiUrl}${'signout'}`,
      headers: authHeader()
    })
    .then(response => {
      localStorage.removeItem('token')
    })
    .catch(error => {
      console.log('error')
    })
}

export const registerUser = (registerInfo) => (dispatch) => {
  return Axios({
      method: 'post',
      url: `${apiUrl}${'users'}`,
      data: registerInfo
    })
    .then(response => {
      dispatch(actions.registerUser(response.data))
    })
    .catch(error => {
      console.log('error')
    })
}
