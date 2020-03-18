import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { updateTodo } from "../../store/actions/todos"
import { Input } from "../UI/Input/Input"

class EditForm extends Component {
  state = {
    title: this.props.title,
  }

  changeInputHandler = event => {
    event.preventDefault()
    this.setState({ title: event.target.value })

    this.updateItemHandler(event)
  }

  updateItemHandler = event => {
    const { id, updateItem } = this.props
    const { title } = this.state

    if (event.keyCode === 13) {
      updateItem(id, title)
      this.closeFormHandler()
    }

    if (event.keyCode === 27) {
      this.closeFormHandler()
    }
  }

  closeFormHandler = () => {
    const { changeEditFormHandler } = this.props
    changeEditFormHandler()
  }

  render() {
    const { title } = this.state

    return (
      <Wrapper>
        <Input
          name="title"
          type="text"
          onChange={this.changeInputHandler}
          value={title}
          onKeyDown={this.updateItemHandler}
          onBlur={this.closeFormHandler}
          autoFocus
        />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.todos.loadingPost,
  }
}

const mapDispatchToProps = dispatch => ({
  updateItem: (id, title) => dispatch(updateTodo(id, title)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
