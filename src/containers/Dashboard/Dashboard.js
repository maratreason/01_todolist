import React, { Component } from "react"

import TodoPanel from "./TodoPanel/TodoPanel"
import TodoList from "./TodoList/TodoList"

class Dashboard extends Component {
  state = {
    todos: [
      { id: 1, title: "Learn React", done: false },
      { id: 2, title: "Learn Vue", done: true },
      { id: 3, title: "Learn Polymer", done: false },
    ],
    title: "",
    searchTitle: "",
  }

  addTaskHandler = () => {
    const { todos, title } = this.state

    const newTask = {
      id: todos.length + 1,
      title,
      done: false,
    }

    this.setState({ todos: [...todos, newTask], title: "" })
  }

  changeTaskHandler = event => {
    event.preventDefault()
    this.setState({ title: event.target.value })
  }

  isDoneTaskHandler = id => {
    const { todos } = this.state

    todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })

    this.setState({ todos })
  }

  removeTaskHandler = id => {
    const { todos } = this.state

    const updatedTodos = todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({ todos: updatedTodos })
  }

  search = (array, searchWord) => {
    if (searchWord.length === 0) return array
    return array.filter(
      item => item.title.toLowerCase().indexOf(searchWord.toLowerCase()) > -1,
    )
  }

  onSearchChange = event => {
    event.preventDefault()
    const searchTitle = event.target.value
    this.setState({ searchTitle })
  }

  onRadioChange = event => {
    const { todos } = this.state

    const updatedTodos = todos.filter(todo => {
      if (event.target.id === "completed") {
        return todo.done
      } else if (event.target.id === "uncompleted") {
        return !todo.done
      }
      return todo
    })

    this.setState({ todos: updatedTodos })
  }

  render() {
    const { todos, title, searchTitle } = this.state

    return (
      <>
        <TodoPanel
          changeTaskHandler={this.changeTaskHandler}
          todos={todos}
          searchTitle={searchTitle}
          title={title}
          addTaskHandler={this.addTaskHandler}
          onSearchChange={this.onSearchChange}
          search={this.search}
          onRadioChange={this.onRadioChange}
        />
        <h2>Список дел.</h2>
        <TodoList
          todos={todos}
          search={this.search}
          title={title}
          searchTitle={searchTitle}
          isDoneTaskHandler={this.isDoneTaskHandler}
          removeTaskHandler={this.removeTaskHandler}
        />
      </>
    )
  }
}

export default Dashboard
