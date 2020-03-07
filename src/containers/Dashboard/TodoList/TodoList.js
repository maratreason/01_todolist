import React, {Component} from 'react';

import TodoItem from "./TodoItem/TodoItem";

class TodoList extends Component {
  render() {
    const { todos } = this.props

    return (
      <div>
        {todos.map((item) => <TodoItem key={item.id} {...item} />)}
      </div>
    );
  }
}

export default TodoList;
