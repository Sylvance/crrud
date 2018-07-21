import React, { Component } from 'react';

import '../App.css';

class Register extends Component {
  render() {
    return (
      <div className="Register">
        <h2>Todos <span>Register</span></h2>
          <form>
            <div>
              <label for="name">Name</label>
              <br />
              <input name="name"></input>
            </div>
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
            <button>Save</button>
          </form>
          <p>
            Have an account? <span><u>Login</u></span>
          </p>
      </div>
    );
  }
}

export default Register;
