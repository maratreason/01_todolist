<<<<<<< HEAD
import React, { PureComponent } from "react"
import styled from "styled-components"

import TodoItem from "./TodoEdit/TodoEdit"
=======
import React, { Component } from "react"
import styled from "styled-components"

import TodoItem from "./TodoItem/TodoItem"
>>>>>>> 50d70896c4a9e94f4949f2b6f972b4c35e64e2d3

class TodoList extends PureComponent {
  render() {
    const {
      todos,
      isDoneTaskHandler,
      removeTaskHandler,
      search,
      searchTitle,
    } = this.props

    const items = search(todos, searchTitle)

    return (
      <Wrapper>
<<<<<<< HEAD
        {todos.length > 0 ? (
          todos.map(item => <TodoItem key={item.id} {...item} />)
        ) : (
          <p>Список задач пуст</p>
        )}
=======
        {items.map(item => (
          <TodoItem
            key={item.id}
            {...item}
            isDoneTaskHandler={isDoneTaskHandler}
            removeTaskHandler={removeTaskHandler}
          />
        ))}
>>>>>>> 50d70896c4a9e94f4949f2b6f972b4c35e64e2d3
      </Wrapper>
    )
  }
}

export default TodoList

const Wrapper = styled.div`
  width: 800px;
  overflow: hidden;
`
