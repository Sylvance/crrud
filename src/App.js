import React, { Component } from 'react';

import Login from './components/LoginComponent.js';
import Register from './components/RegisterComponent.js';
import TodoList from './components/TodoListComponent.js';
import TodoListItem from './components/TodoListItemComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="Logo">Todos <span>App</span></h2>
        <p>
          <span><u>Login</u> </span>
          <span><u>Register</u></span>
        </p>
        <Login />
        <Register />
        <TodoList />
        <TodoListItem />
      </div>
    );
  }
}

export default App;
