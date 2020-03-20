import React, { PureComponent } from "react"
import styled from "styled-components"

import AddItemBlock from "./AddItemBlock/AddItemBlock"
import FilterBlock from "./FilterBlock/FilterBlock"
import SearchBlock from "./SearchBlock/SearchBlock"

class TodoPanel extends PureComponent {
  render() {
    const { filterByCompleteness } = this.props

    return (
      <Wrapper>
        <AddItemBlock />
        <FilterBlock filterByCompleteness={filterByCompleteness} />
        <SearchBlock />
      </Wrapper>
    )
  }
}

export default TodoPanel

const Wrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-self: center;
`
