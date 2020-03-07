import React, {Component} from 'react';
import styled from 'styled-components'

import {Button} from "../../../../components/UI/Button/Button";

class TodoItem extends Component {
  render() {
    const { title, done } = this.props

    return (
      <div>
        <Title done={done} >{title}</Title>
        <Button type="info">Toggle</Button>
        <Button type="success">Edit</Button>
        <Button type="danger">Delete</Button>
      </div>
    );
  }
}

export default TodoItem;

const Title = styled.span`
  text-decoration: ${props => props.done ? 'line-through' : 'none' }
`
