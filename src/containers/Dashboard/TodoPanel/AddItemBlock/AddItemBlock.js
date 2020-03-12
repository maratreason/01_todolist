<<<<<<< HEAD
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
=======
import React, { PureComponent } from "react"
import styled from "styled-components"
import { Input } from "../../../../components/UI/Input/Input"
import { AddButton } from "../../../../components/UI/Button/Button"

class AddItemBlock extends PureComponent {
  // state is here

  render() {
    const { changeTaskHandler, title, addTaskHandler } = this.props

    return (
      <Wrapper>
        <Input type="text" onChange={changeTaskHandler} value={title} />
        <AddButton type="default" onClick={addTaskHandler}>
          Add item
        </AddButton>
      </Wrapper>
    )
  }
}

export default AddItemBlock
>>>>>>> 50d70896c4a9e94f4949f2b6f972b4c35e64e2d3

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
