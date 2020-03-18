import React, { PureComponent } from "react"
import { connect } from "react-redux"

import { fetchTodoList } from "../../store/actions/todos"

import TodoPanel from "./TodoPanel/TodoPanel"
import TodoList from "./TodoList/TodoList"

class Dashboard extends PureComponent {
  componentDidMount() {
    const { fetchData, currentPage, limit } = this.props
    fetchData(currentPage, limit)
  }

  render() {
    const { loading, todos, currentPage, limit, fetchData, length } = this.props

    return (
      <>
        <TodoPanel />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <TodoList
            todos={todos}
            length={length}
            currentPage={currentPage}
            limit={limit}
            fetchData={fetchData}
          />
        )}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.origin,
    loading: state.todos.loadingGet,
    currentPage: state.todos.currentPage,
    limit: state.todos.limit,
    length: state.todos.todosLength,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchTodoList({})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
