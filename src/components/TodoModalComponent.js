import React, { Component } from 'react';

class TodoModal extends Component {
  render() {
    return (
	    <div id="todo-modal" className="todo-modal">
		  <div className="modal-content">
		    <span className="close">&times;</span>
		    Alert
		    <p>Are you sure you want to delete this?</p>
		    <p>
		      <span><u>Yeah</u> </span>
		      <span><u>Not sure</u></span>
		    </p>
		  </div>
		</div>
    );
  }
}

export default TodoModal;

