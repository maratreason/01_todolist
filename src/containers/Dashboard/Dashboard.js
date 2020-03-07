import React, {Component} from 'react';

import TodoPanel from "./TodoPanel/TodoPanel";
import TodoList from "./TodoList/TodoList";

class Dashboard extends Component {
  state = {
    todos: [
      { id: 1, title: "Learn React", done: false },
      { id: 2, title: "Learn Vue", done: true },
      { id: 3, title: "Learn Polymer", done: false },
    ]
  }

  render() {
    const { todos } = this.state

    return (
      <>
        <TodoPanel />
        <TodoList todos={todos} />
      </>
    );
  }
}

export default Dashboard;
