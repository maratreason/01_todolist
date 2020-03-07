import React, { PureComponent } from "react"
import styled from "styled-components"
import { SearchInput } from "../../../../components/UI/Input/Input"

class SearchBlock extends PureComponent {
  render() {
    return (
      <Wrapper>
        <label htmlFor="search">Search</label>
        <SearchInput id="search" type="text" />
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
