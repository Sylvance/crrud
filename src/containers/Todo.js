import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TodoList from './components/TodoListComponent.js';

import * as Actions from '../actions'

const Todo = ({todos, actions}) => (
  <div>
    <h2>Todos <span>list items</span></h2>
    <TodoList userid={userid} todos={todos} actions={actions} />
  </div>
)

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  userid: JSON.parse(localStorage.getItem('userid'))
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)