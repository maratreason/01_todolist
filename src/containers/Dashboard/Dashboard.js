import React, { Component } from "react"

import TodoPanel from "./TodoPanel/TodoPanel"
import TodoList from "./TodoList/TodoList"

const initialTodos = [
  { id: 1, title: "Learn React", done: false },
  { id: 2, title: "Learn Vue", done: true },
  { id: 3, title: "Learn Polymer", done: false },
]

class Dashboard extends Component {
  state = {
    todos: initialTodos,
    filteredTodos: initialTodos,
    // this state must be located in AddItemBlock component
    title: "",
    // this state must be located in SearchBlock component
    searchTitle: "",
  }

  // addTask
  addTaskHandler = () => {
    const { todos, title } = this.state

    const newTask = {
      id: todos.length + 1,
      title,
      done: false,
    }

    // you can also use todos.concat(newTask)
    this.setState({ todos: [...todos, newTask], title: "" })
  }

  // move to AddItemBlock
  changeTaskHandler = event => {
    event.preventDefault()
    this.setState({ title: event.target.value })
  }

  // toggleTaskCompleteness
  // every function name starts with an action, verb
  isDoneTaskHandler = id => {
    const { todos } = this.state

    // you mutate array here
    todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })

    this.setState({ todos })
  }

  // removeTask
  removeTaskHandler = id => {
    const { todos } = this.state

    // todos.filter(todo => todo.id !== id)
    const updatedTodos = todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({ todos: updatedTodos })
  }

  // move to SearchBlock
  search = (array, searchWord) => {
    if (searchWord.length === 0) return array
    return array.filter(
      item => item.title.toLowerCase().indexOf(searchWord.toLowerCase()) > -1,
    )
  }

  // move to SearchBlock
  onSearchChange = event => {
    event.preventDefault()
    const searchTitle = event.target.value
    this.setState({ searchTitle })
  }

  filterByCompleteness = (filter) => {
    const { todos } = this.state

    if (filter !== "all") {
      this.setState({
        filteredTodos: todos.filter(todo => filter === "completed"
          ? todo.done
          : !todo.done
        )
      })
    } else {
      this.setState({
        filteredTodos: todos,
      })
    }
  }

  // look at method above
  onRadioChange = event => {
    const { todos } = this.state

    const updatedTodos = todos.filter(todo => {
      if (event.target.id === "completed") {
        return todo.done
      } if (event.target.id === "uncompleted") {
        return !todo.done
      }
      return todo
    })

    this.setState({ todos: updatedTodos })
  }

  render() {
    const { todos, title, searchTitle, filteredTodos } = this.state

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
          filterByCompleteness={this.filterByCompleteness}
        />
        <h2>Список дел.</h2>
        <TodoList
          todos={filteredTodos}
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
