import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Register extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    registerUser: PropTypes.func.isRequired
  }

  state = {
    name: '',
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.props.registerUser(this.state))

    this.props.registerUser(this.state)
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="Register">
        <h2>Todos <span>Register</span></h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <br />
              <input name="name"
                     type="text"
                     onChange={this.handleChange}
                     required></input>
            </div>
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
            <div>
              <label htmlFor="password_confirmation">Confirm password</label>
              <br />
              <input name="password_confirmation"
                     type="password"
                     onChange={this.handleChange}
                     required></input>
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            Have an account? <span><Link to='/login'>Login</Link></span>
          </p>
          <Link to={`/`}>Back to Index</Link>
      </div>
    );
  }
}

export default Register;
