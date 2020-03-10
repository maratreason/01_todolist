import React, { PureComponent } from "react"
import styled from "styled-components"

import TodoItem from "./TodoEdit/TodoEdit"

class TodoList extends PureComponent {
  render() {
    const { todos } = this.props

    return (
      <Wrapper>
        {todos.length > 0 ? (
          todos.map(item => <TodoItem key={item.id} {...item} />)
        ) : (
          <p>Список задач пуст</p>
        )}
      </Wrapper>
    )
  }
}

export default TodoList

const Wrapper = styled.div`
  width: 800px;
  overflow: hidden;
`
