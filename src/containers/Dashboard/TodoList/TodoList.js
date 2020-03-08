import React, { Component } from "react"
import styled from "styled-components"

import TodoItem from "./TodoItem/TodoItem"

class TodoList extends Component {
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
        {items.map(item => (
          <TodoItem
            key={item.id}
            {...item}
            isDoneTaskHandler={isDoneTaskHandler}
            removeTaskHandler={removeTaskHandler}
          />
        ))}
      </Wrapper>
    )
  }
}

export default TodoList

const Wrapper = styled.div`
  width: 800px;
  overflow: hidden;
`
