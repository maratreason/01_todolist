import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { updateTodo } from "../../store/actions/todos"
import { Input } from "../UI/Input/Input"
import { Button } from "../UI/Button/Button"

class EditForm extends Component {
  state = {
    title: this.props.title,
  }

  changeInputHandler = event => {
    this.setState({ title: event.target.value })
  }

  updateItemHandler = id => {
    const { title } = this.state
    const { updateItem, changeEditFormHandler } = this.props
    updateItem(id, title)
    changeEditFormHandler()
  }

  closeFormHandler = () => {
    const { changeEditFormHandler } = this.props
    changeEditFormHandler()
  }

  render() {
    const { id, loading } = this.props
    const { title } = this.state

    return (
      <Wrapper>
        <Input
          name="title"
          type="text"
          onChange={this.changeInputHandler}
          value={title}
          // onBlur={() => {
          //   this.closeFormHandler()
          // }}
        />
        <div>
          <Button
            disabled={loading}
            type="info"
            onClick={() => this.updateItemHandler(id)}
          >
            Save
          </Button>
          <Button type="default" onClick={this.closeFormHandler}>
            Cancel
          </Button>
        </div>
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
