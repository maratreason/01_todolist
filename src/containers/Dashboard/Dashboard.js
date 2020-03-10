import React, { PureComponent } from "react"
import { connect } from "react-redux"

import TodoPanel from "./TodoPanel/TodoPanel"
import TodoList from "./TodoList/TodoList"

class Dashboard extends PureComponent {
  render() {
    console.log("dashboard render")
    const { todos } = this.props

    return (
      <>
        <TodoPanel />
        <TodoList todos={todos} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.filtered,
  }
}

export default connect(mapStateToProps)(Dashboard)
