import React, { Component } from 'react'
import AppContext from '../context/AppContext';

export default class TodoHeader extends Component {
  static contextType = AppContext;

  state = {
    input: ''
  }

  onSubmit = (event) => {
    const { createTodo } = this.context;
    event.preventDefault();
    createTodo(this.state.input);
    this.setState({ input: '' })
  }

  onInputChange = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value })    
  }

  render() {
    return (
      <header className="header">
				<h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input 
            onChange={this.onInputChange}
            value={this.state.input}      
            className="new-todo" 
            placeholder="What needs to be done?" 
            autoFocus
          />
        </form>
			</header>
    )
  }
}
