import React, { Component } from 'react';

import '../App.css';

class TodoListItem extends Component {
  render() {
    return (
	    <div>
	        <h2>Todos <span>list item</span></h2>
			<div>
			  <div>
			    <p>Title</p>
			    <p>Description</p>
			    <p>
			      <span><u>Edit</u> </span>
			      <span><u>Delete</u></span>
			    </p>
			  </div>
			</div>
	    </div>
    );
  }
}

export default TodoListItem;

