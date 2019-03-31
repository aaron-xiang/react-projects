import React, { Component } from 'react';
// import Todo from './components/Todo';
import TodoList from './components/TodoList';
import TodoModel from './models/Todo';

const todo1 = new TodoModel('Clean up room', true)
const todo2 = new TodoModel('Home work')
const todo3 = new TodoModel('Buy some milk')
const todos = [todo1, todo2, todo3]

class App extends Component {
  state = {
    todos: todos
  }

  deleteTodo = (name) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.name === name);
    console.log('delete todo app', name)
    todos.splice(index, 1);
    this.setState({ todos });
  }

  render() {
    return (
      <TodoList todos={todos} deleteTodo={this.deleteTodo} />
    );
  }
}

export default App;

/*
  return (
    <TodoList todos={todos} />
  )
*/