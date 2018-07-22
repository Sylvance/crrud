import Axios from 'axios';

import * as actions from '../actions/Actions'

const apiUrl = 'https://localhost:3000/';

export const loginUser = (user) => {
  return (dispatch) => {
    return Axios({
        method: 'post',
        url: `${apiUrl}${'signin'}`,
        data: user,
        headers: authHeader()
      })
      .then(response => {
        dispatch(actions.loginUser(response.data))
        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('userid', JSON.stringify(response.data.userid));
      })
      .catch(error => {
        console.log('error')
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    return Axios({
        method: 'get',
        url: `${apiUrl}${'signout'}`,
        headers: authHeader()
      })
      .then(response => {
        dispatch(actions.logoutUser(response.data))
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
      })
      .catch(error => {
        console.log('error')
      });
  };
};

export const registerUser = (user) => {
  return (dispatch) => {
    return Axios({
        method: 'post',
        url: `${apiUrl}${'signup'}`,
        data: user,
        headers: authHeader()
      })
      .then(response => {
        dispatch(actions.registerUser(response.data))
      })
      .catch(error => {
        console.log('error')
      });
  };
};
