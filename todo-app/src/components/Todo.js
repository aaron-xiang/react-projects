import React, { Component } from 'react';

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

  constructor(props) {
    super(props);
    this.state = {
      completed: props.todo.completed
    }
  }

  onDelete = () => {
    const { todo, onDelete } = this.props;
    console.log('delete todo', todo.name, onDelete);
    onDelete(todo.name);
  }

  render() {
    const { name } = this.props.todo;
    const { completed } = this.state;
    const status = completed ? "completed" : ""
    return (
      <li className={status}>
        <div className="view">
          <input className="toggle" type="checkbox" id="1" defaultChecked={completed} onClick={() => this.setState({ completed: !completed })}/>
          <label>{name}</label>
          <button className="destroy" id="1" onClick={this.onDelete}></button>
        </div>
      </li>
    );
  }
}

export default Todo;