import React, { PureComponent } from "react"
import { connect } from "react-redux"

import TodoPanel from "./TodoPanel/TodoPanel"
import TodoList from "./TodoList/TodoList"
import { fetchTodoList } from "../../store/actions/todos"

class Dashboard extends PureComponent {
  componentDidMount() {
    const { fetchData } = this.props
    fetchData()
  }

  render() {
    const { todos, loading } = this.props

    return (
      <>
        <TodoPanel />
        {loading ? <div>Loading...</div> : <TodoList todos={todos} />}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.filtered,
    loading: state.todos.loadingGet,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchTodoList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
