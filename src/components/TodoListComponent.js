import React, { Component } from 'react';

import TodoListItem from './TodoListItemComponent.js';
import TodoModal from './components/TodoModalComponent.js';
import TodoForm from './components/TodoFormComponent.js';
import TodoSingleItem from './components/TodoSingleItemComponent.js';
import '../App.css';

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <ul>
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
        </ul>
        <TodoSingleItem />
        <TodoModal />
        <TodoForm />
      </div>
    );
  }
}

export default TodoList;
