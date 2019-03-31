import React, { Component } from 'react';
import Todo from './Todo';

/**
 * props: {
 *  todos: todo[]
 *  deleteTodo: function(name)
 * }
 */
class TodoList extends Component {
  deleteTodo = (name) => {
    const { deleteTodo } = this.props
    console.log('delete todolist', name, deleteTodo)
    deleteTodo(name);
  }

  render() {
    const { todos } = this.props;
    console.log('todolist', todos)
    // const listItems = [];
    // todos.forEach(todo => listItems.push(<Todo todo={todo} />));
    const listItems = todos.map(todo => <Todo key={todo.name} todo={todo} onDelete={this.deleteTodo} />);
    return (
      <ul className="todo-list">
      {
        // todos.map(todo => <Todo todo={todo} />)
        listItems
      }
      </ul>
    )
  }
}

export default TodoList;

/*
  Concept: under the hood, React will do this:

  const todoList = new TodoList()
  HTMLElement el = todoList.render()
  document.getElementById().apppendChild(el)

*/

/*
 todos.map(todo => <Todo todo={todo} />)
*/