import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Login extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    loginUser: PropTypes.func.isRequired
  }

  state = {
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.loginUser(this.state)
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="Login">
        <h2>Todos <span>Login</span></h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input name="email"
                     type="email"
                     onChange={this.handleChange}
                     required></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input name="password"
                     type="password"
                     onChange={this.handleChange}
                     required></input>
            </div>
            <button type="submit">Login</button>
          </form>
          <p>
            No account yet? <span><Link to='/register'>Register</Link></span>
          </p>
          <Link to={`/`}>Back to Index</Link>
      </div>
    );
  }
}

export default Login;
