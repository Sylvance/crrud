import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoListItem extends Component {
	static propTypes = {
	    todo: PropTypes.object.isRequired
	}
  	render() {
  		const { todo } = this.props
	    return (
		    <li>{todo.name} 
		      <span><u>View</u></span>
		    </li>
	    );
	}
}

export default TodoListItem;

