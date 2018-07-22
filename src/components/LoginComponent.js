import React, { Component } from 'react';

import '../App.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h2>Todos <span>Login</span></h2>
          <form>
            <div>
              <label for="email">Email</label>
              <br />
              <input name="email"></input>
            </div>
            <div>
              <label for="password">Password</label>
              <br />
              <input name="password"></input>
            </div>
            <button>Login</button>
          </form>
          <p>
            No account yet? <span><u>Register</u></span>
          </p>
      </div>
    );
  }
}

export default Login;
