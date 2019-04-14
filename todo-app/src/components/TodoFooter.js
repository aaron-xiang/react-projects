import React, { Component } from 'react'
import AppContext from '../context/AppContext';

export default class TodoFooter extends Component {
  static contextType = AppContext;
  onClear = () => {
    const { clearCompleted } = this.context;
    clearCompleted();
  }

  onSelectAll = () => {
    this.context.filterTodos(null);
  }

  onSelectActive = () => {
    console.log('select active');
    this.context.filterTodos({completed: false});

  }

  onSelectCompleted = () => {
    this.context.filterTodos({completed: true});
  }

  render() {
    const { todos } = this.context;
    const activeTodos = todos
      .map(todo => todo.completed ? 0 : 1)
      .reduce((acc, cur) => acc+cur, 0);
    return (
      <footer className="footer">
				<span className="todo-count"><strong>{activeTodos}</strong> item left</span>
				<ul className="filters">
					<li>
						<a className="selected" href="#/" onClick={this.onSelectAll}>All</a>
					</li>
					<li>
						<a href="#/active" onClick={this.onSelectActive}>Active</a>
					</li>
					<li>
						<a href="#/completed" onClick={this.onSelectCompleted}>Completed</a>
					</li>
				</ul>
				<button className="clear-completed" onClick={this.onClear}>Clear completed</button>
			</footer>
    )
  }
}
