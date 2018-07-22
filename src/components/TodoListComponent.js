import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TodoListItem from './TodoListItemComponent'
import TodoModal from './TodoModalComponent'
import TodoForm from './TodoFormComponent'
import TodoSingleItem from './TodoSingleItemComponent'

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    api: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.api.getTodos(this.props.userid)
  }

  render() {
    const { todos, api } = this.props

    return (
      <div className="TodoList">
        <ul>
          {todos.map(todo =>
            <TodoListItem key={todo.id} todo={todo} {...api} />
          )}
        </ul>
        <p>
          <span><u>Add item</u> </span>
        </p>
        <TodoSingleItem />
        <TodoModal />
        <TodoForm />
      </div>
    );
  }
}

export default TodoList
