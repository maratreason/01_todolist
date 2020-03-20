import React, { PureComponent } from "react"
import styled from "styled-components"

import TodoItem from "./TodoEdit/TodoEdit"
import Pagination from "../../../components/UI/Pagination/Pagination"

class TodoList extends PureComponent {
  onPageChanged = pageNumber => {
    const { fetchData, limit } = this.props
    fetchData(pageNumber, limit)
  }

  render() {
    const { todos, currentPage, limit, length } = this.props

    return (
      <Wrapper>
        {todos.length > 0 ? (
          todos.map(item => <TodoItem key={item.id} {...item} />)
        ) : (
          <p>Список задач пуст</p>
        )}

        <Pagination
          onPageChanged={this.onPageChanged}
          currentPage={currentPage}
          limit={limit}
          length={length}
        />
      </Wrapper>
    )
  }
}

export default TodoList

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  overflow: hidden;
`
