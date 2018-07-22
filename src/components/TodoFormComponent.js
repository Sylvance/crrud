import React, { Component } from 'react';

import '../App.css';

class TodoForm extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input name="title"></input>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <br />
            <input name="description"></input>
          </div>
          <button>Save</button>
        </form>
        <p>
          <span><u>Back to item</u></span>
        </p>
      </div>
    );
  }
}

export default TodoForm;
