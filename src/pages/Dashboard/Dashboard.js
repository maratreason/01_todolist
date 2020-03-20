import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import { fetchTodoList } from "../../store/actions/todos"
import { logout, checkToken } from "../../store/actions/auth"

import TodoPanel from "./TodoPanel/TodoPanel"
import TodoList from "./TodoList/TodoList"

import Navigation from "../../components/Navigation/Navigation"

class Dashboard extends Component {
  componentDidMount() {
    const { fetchData, currentPage, limit, token } = this.props
    if (token) {
      fetchData(currentPage, limit)
    }
  }

  componentDidUpdate(prevProps) {
    const { fetchData, currentPage, limit, token } = this.props
    if (token && token !== prevProps.token) {
      fetchData(currentPage, limit)
    }
  }

  render() {
    const {
      loading,
      todos,
      currentPage,
      limit,
      fetchData,
      length,
      history,
      token,
    } = this.props

    const renderTodo = (
      <WrapperComponent>
        <Navigation
          logoutUser={this.props.logoutUser}
          token={token}
          history={this.props.history}
        />
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
      </WrapperComponent>
    )

    return (
      <WrapperContent>
        {token ? renderTodo : history.push("/login")}
      </WrapperContent>
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
    token: state.auth.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchTodoList({})),
    logoutUser: () => dispatch(logout()),
    checkToken: () => dispatch(checkToken()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

const WrapperComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const WrapperContent = styled.div`
  width: 100%;
`
