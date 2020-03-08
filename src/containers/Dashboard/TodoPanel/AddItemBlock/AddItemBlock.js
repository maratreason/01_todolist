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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
