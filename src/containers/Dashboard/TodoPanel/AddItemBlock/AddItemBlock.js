import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { addTodo } from "../../../../store/actions/todos"
import { Button } from "../../../../components/UI/Button/Button"
import { Input } from "../../../../components/UI/Input/Input"

class AddItemBlock extends Component {
  state = {
    value: "",
  }

  changeInputHandler = event => {
    this.setState({ value: event.target.value })
  }

  onClickHandler = () => {
    const { addNewItem } = this.props
    const { value } = this.state
    addNewItem({
      id: Math.floor(Math.random() * 1000_000),
      title: value,
      done: false,
    })
    this.setState({ value: "" })
  }

  render() {
    const { value } = this.state
    const { loading } = this.props

    return (
      <Wrapper>
        <Input type="text" onChange={this.changeInputHandler} value={value} />
        <Button disabled={loading} type="success" onClick={this.onClickHandler}>
          Add item
        </Button>
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
  addNewItem: todo => dispatch(addTodo(todo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddItemBlock)

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
