import React, { Component } from 'react';
import AppContext from '../context/AppContext';

/**
 * props: {
 *  name: string
 *  completed: boolean
 *  onDelete: function(name)
 * }
 */
class Todo extends Component {
  // state = {
  //   completed: false
  // }

  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      completed: props.todo.completed
    }
  }

  onDelete = () => {
    const { todo } = this.props;
    const { deleteTodo } = this.context;
    deleteTodo(todo.name);
  }

  onToggleStatus = () => {
    // TODO: set completed status in TodoApp state
    // pass in a event handler in props
    const { toggleStatus } = this.context;
    const { todo } = this.props;
    toggleStatus(todo.name);
    this.setState({ completed: !this.state.completed })
  }

  render() {
    const { name } = this.props.todo;
    const { completed } = this.state;
    const status = completed ? "completed" : ""
    return (
      <li className={status}>
        <div className="view">
          <input className="toggle" type="checkbox" id="1" defaultChecked={completed} onClick={this.onToggleStatus}/>
          <label>{name}</label>
          <button className="destroy" id="1" onClick={this.onDelete}></button>
        </div>
      </li>
    );
  }
}

export default Todo;