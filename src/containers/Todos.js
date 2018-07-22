import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TodoList from '../components/TodoListComponent.js';

import * as Api from '../api/TodoApi'

const Todos = ({todos, api}) => (
  <div>
    <h2>Todos <span>list items</span></h2>
    <TodoList todos={todos} api={api} />
  </div>
)

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  api: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  api: bindActionCreators(Api, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)