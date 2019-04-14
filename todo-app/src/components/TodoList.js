import React, { Component } from 'react';
import Todo from './Todo';
import AppContext from '../context/AppContext';

/**
 * props: {
 *  todos: todo[]
 *  deleteTodo: function(name)
 * }
 */
class TodoList extends Component {
  static contextType = AppContext;
  // deleteTodo = (name) => {
  //   const { deleteTodo } = this.props
  //   console.log('delete todolist', name, deleteTodo)
  //   deleteTodo(name);
  // }

  // toggleTodo = (name) => {
  //   const { toggleTodo } = this.props;
  //   toggleTodo(name);  
  // }

  render() {
    const { todos, filter } = this.context;
    // { completed : true/false}
    // console.log('todolist', todos)
    // const listItems = [];
    // todos.forEach(todo => listItems.push(<Todo todo={todo} />));
    console.log(filter);
    const filteredTodos = filter ? todos.filter(todo => todo.completed === filter.completed) : todos;
    console.log(filteredTodos);
    const listItems = filteredTodos.map(todo => <Todo key={todo.name} todo={todo} onDelete={this.deleteTodo} onToggle={this.toggleTodo} />);
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