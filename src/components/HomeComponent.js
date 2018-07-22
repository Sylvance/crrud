import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="Logo">Todos <span>App</span></h2>
        <p>
          <span><Link to='/login'>Login</Link> </span>
          <span><Link to='/register'>Register</Link></span>
        </p>
      </div>
    );
  }
}

export default Home;
