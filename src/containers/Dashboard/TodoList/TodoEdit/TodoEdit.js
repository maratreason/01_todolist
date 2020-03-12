import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import { Button } from "../../../../components/UI/Button/Button"
import { toggleTodo, removeTodo } from "../../../../store/actions/todos"
import EditForm from "../../../../components/EditForm/EditForm"

class TodoItem extends Component {
  state = {
    editable: false,
    done: false,
  }

  openFormHandler = () => {
    const { editable } = this.state
    this.setState({ editable: !editable })
  }

  toggleTodoItem = id => {
    const { toggleItem } = this.props
    const { done } = this.state
    this.setState({ done: !done })
    toggleItem(id, done)
  }

  render() {
    const { title, id, done, loading, removeItem } = this.props
    const { editable } = this.state

    return (
      <Wrapper>
        {editable ? (
          <EditForm
            id={id}
            title={title}
            changeEditFormHandler={this.openFormHandler}
          />
        ) : (
          <>
            <Title done={done} onClick={this.openFormHandler}>
              {title}
            </Title>
            <div>
              <Button type="info" onClick={() => this.toggleTodoItem(id)}>
                Complete
              </Button>
              <Button
                disabled={loading}
                type="danger"
                onClick={() => removeItem(id)}
              >
                Delete
              </Button>
            </div>
          </>
        )}
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
  toggleItem: (id, done) => dispatch(toggleTodo(id, done)),
  removeItem: id => dispatch(removeTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 3px;
`

const Title = styled.span`
  text-decoration: ${props => (props.done ? "line-through" : "none")};
  color: ${props => (props.done ? "#99CCCC" : "black")};
  align-self: center;
  padding-left: 10px;
  position: relative;
  &:after {
    /* content: ${props => (props.done ? "Done" : "")}; */
    content: "It's already done!";
    width: ${props => (props.done ? "200px" : "")};
    height: ${props => (props.done ? "20px" : "")};
    color: #0099FF;
    text-transform: uppercase;
    font-weight: bold;
    width: 200px;
    display: ${props => (props.done ? "block" : "none")};
    position: absolute;
    left: 120px;
    bottom: -2px;
  }
`
