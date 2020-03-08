import React, { PureComponent } from "react"
import styled from "styled-components"
import { SearchInput } from "../../../../components/UI/Input/Input"

class SearchBlock extends PureComponent {
  // state is here

  render() {
    const { onSearchChange, searchTitle } = this.props
    return (
      <Wrapper>
        <label htmlFor="search">Search</label>
        <SearchInput
          id="search"
          type="text"
          onChange={onSearchChange}
          value={searchTitle}
        />
      </Wrapper>
    )
  }
}

export default SearchBlock

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`
