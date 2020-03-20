import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import { fetchTodoList } from "../../../../store/actions/todos"

import { SearchInput } from "../../../../components/UI/Input/Input"

class SearchBlock extends Component {
  state = {
    value: "",
  }

  changeTitleFilter = event => {
    const { searchByTitle } = this.props
    const { value } = event.target
    searchByTitle(value)
    this.setState({ value })
  }

  render() {
    const { value } = this.state

    return (
      <Wrapper>
        <label htmlFor="search">Search</label>
        <SearchInput
          onChange={this.changeTitleFilter}
          id="search"
          type="text"
          value={value}
        />
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchByTitle: search => dispatch(fetchTodoList({ q: search })),
})

export default connect(null, mapDispatchToProps)(SearchBlock)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`
