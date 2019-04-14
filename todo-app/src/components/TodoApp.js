import React, { Component } from 'react'
import TodoHeader from './TodoHeader'
import TodoFooter  from './TodoFooter'
import TodoList from './TodoList'
// import TodoModel from '../models/Todo'

// const todo1 = new TodoModel('Clean up room', true)
// const todo2 = new TodoModel('Home work')
// const todo3 = new TodoModel('Buy some milk')
// const todos = [todo1, todo2, todo3]



export default class TodoApp extends Component {
  // state = {
  //   todos
  // }

  // deleteTodo = (name) => {
  //   const { todos } = this.state;
  //   const index = todos.findIndex(todo => todo.name === name);
  //   console.log('delete todo app', name)
  //   todos.splice(index, 1);
  //   this.setState({ todos });
  // }

  // addTodo = (name) => {
  //   const { todos } = this.state;
  //   const todo = new TodoModel(name);
  //   todos.push(todo);
  //   this.setState({ todos });
  // }

  // toggleTodoStatus = (name) => {
  //   const todos = this.state.todos.map(todo => {
  //     if (todo.name === name) {
  //       todo.completed = !todo.completed;
  //     }
  //     return todo;
  //   });
  //   // todos.setState({ completed: !this.state.completed });
  //   this.setState({ todos });
  // }

  render() {
    return (
      <section className="todoapp">
        <TodoHeader onSubmit={this.addTodo} />
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox"/>
				  <label forhtml="toggle-all">Mark all as complete</label>
          <TodoList />
        </section>
        <TodoFooter/>
      </section>
    )
  }
}
