import React, { PureComponent } from "react"
import styled from "styled-components"

import { Button } from "../../../../components/UI/Button/Button"

class TodoItem extends PureComponent {
  render() {
    const { id, title, done, isDoneTaskHandler, removeTaskHandler } = this.props

    return (
      <Wrapper>
        <Title done={done}>{title}</Title>
        <div>
          <Button onClick={() => isDoneTaskHandler(id)} type="info">
            Toggle
          </Button>
          <Button type="success">Edit</Button>
          <Button onClick={() => removeTaskHandler(id)} type="danger">
            Delete
          </Button>
        </div>
      </Wrapper>
    )
  }
}

export default TodoItem

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
