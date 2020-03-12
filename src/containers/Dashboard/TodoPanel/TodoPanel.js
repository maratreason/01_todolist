import React, { PureComponent } from "react"
import styled from "styled-components"

import AddItemBlock from "./AddItemBlock/AddItemBlock"
import FilterBlock from "./FilterBlock/FilterBlock"
import SearchBlock from "./SearchBlock/SearchBlock"

class TodoPanel extends PureComponent {
  render() {
<<<<<<< HEAD
    const { filterByCompleteness } = this.props

    return (
      <Wrapper>
        <AddItemBlock />
        <FilterBlock filterByCompleteness={filterByCompleteness} />
        <SearchBlock />
=======
    const {
      changeTaskHandler,
      searchTitle,
      addTaskHandler,
      onSearchChange,
      title,
      onRadioChange,
      filterByCompleteness,
    } = this.props

    return (
      <Wrapper>
        <AddItemBlock
          changeTaskHandler={changeTaskHandler}
          title={title}
          addTaskHandler={addTaskHandler}
        />
        <FilterBlock
          onRadioChange={onRadioChange}
          filterByCompleteness={filterByCompleteness}
        />
        <SearchBlock
          searchTitle={searchTitle}
          onSearchChange={onSearchChange}
        />
>>>>>>> 50d70896c4a9e94f4949f2b6f972b4c35e64e2d3
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
