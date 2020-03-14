import React, { PureComponent } from "react"
import { connect } from "react-redux"

import TodoPanel from "./TodoPanel/TodoPanel"
import TodoList from "./TodoList/TodoList"
import { fetchTodoList, getTodosLength } from "../../store/actions/todos"
import Paginate from "./TodoPanel/Paginate/Paginate"

class Dashboard extends PureComponent {
  componentDidMount() {
    const { fetchData, currentPage, limit, getLength } = this.props
    getLength()
    fetchData(currentPage, limit)
  }

  onPageChanged = pageNumber => {
    const { fetchData, limit } = this.props
    fetchData(pageNumber, limit)
  }

  render() {
    const { loading, todos, currentPage, limit, length } = this.props
    return (
      <>
        <TodoPanel />
        {loading ? <div>Loading...</div> : <TodoList todos={todos} />}
        <Paginate
          onPageChanged={this.onPageChanged}
          currentPage={currentPage}
          limit={limit}
          length={length}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.filtered,
    loading: state.todos.loadingGet,
    currentPage: state.todos.currentPage,
    limit: state.todos.limit,
    length: state.todos.todosLength,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (currentPage, limit) =>
      dispatch(fetchTodoList(currentPage, limit)),
    getLength: () => dispatch(getTodosLength()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
