import React, { Component } from 'react';
import AppContext from './context/AppContext';
import TodoApp from './components/TodoApp';
import Todo from './models/Todo';
const todo1 = new Todo('Clean up room', true)
const todo2 = new Todo('Home work')
const todo3 = new Todo('Buy some milk')
const todos = [todo1, todo2, todo3]
class App extends Component {
  state = {
    todos,
    filter: null, // { completed: boolean }
  }

  deleteTodo = (name) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.name === name);
    console.log('delete todo app', name)
    todos.splice(index, 1);
    this.setState({ todos });
  }

  createTodo = (name) => {
    const { todos } = this.state;
    const todo = new Todo(name);
    todos.push(todo);
    this.setState({ todos });
  }

  toggleStatus = (name) => {
    const todos = this.state.todos.map(todo => {
      if (todo.name === name) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    // todos.setState({ completed: !this.state.completed });
    this.setState({ todos });
  }

  clearCompleted = () => {
    let { todos } = this.state;
    todos = todos.filter(todo => {
      return !todo.completed
    })
    this.setState({ todos });
  }

  filterTodos = (filter) => {
    this.setState({ filter });
    console.log(this.state);
  }

  render() {
    const { todos, filter } = this.state;
    const { createTodo, deleteTodo, toggleStatus, clearCompleted, filterTodos } = this;
    return (
      <AppContext.Provider value={{
        todos,
        filter,
        createTodo,
        deleteTodo,
        toggleStatus,
        clearCompleted,
        filterTodos
      }}>
        <TodoApp />
      </AppContext.Provider>
    );
  }
}

export default App;
