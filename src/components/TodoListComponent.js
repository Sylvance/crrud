import React, { Component } from 'react';

import TodoItem from './TodoItemComponent.js';
import '../App.css';

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <h2>Todos <span>list items</span></h2>
        <ul>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
      </div>
    );
  }
}

export default TodoList;
