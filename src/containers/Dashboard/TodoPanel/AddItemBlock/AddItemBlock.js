import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { addNewTodo } from "../../../../store/actions/todos"
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
      id: Math.random(),
      title: value,
      done: false,
    })
    this.setState({ value: "" })
  }

  render() {
    const { value } = this.state

    return (
      <Wrapper>
        <Input type="text" onChange={this.changeInputHandler} value={value} />
        <Button type="success" onClick={this.onClickHandler}>
          Add item
        </Button>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addNewItem: todo => dispatch(addNewTodo(todo)),
})

export default connect(null, mapDispatchToProps)(AddItemBlock)

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
