import React, { Component } from 'react';

import '../App.css';

class TodoModal extends Component {
  render() {
    return (
	    <div id="todo-modal" class="todo-modal">
		  <div class="modal-content">
		    <span class="close">&times;</span>
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

