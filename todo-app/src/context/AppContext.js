import React from "react";

export default React.createContext({
  todos: [],
  filter: null,
  createTodo: (name) => {},
  deleteTodo: (name) => {},
  toggleStatus: (name) => {},
  filterTodos: (filter) => {},
  clearCompleted: () => {}
});