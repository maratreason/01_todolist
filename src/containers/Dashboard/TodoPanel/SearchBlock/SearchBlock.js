<<<<<<< HEAD
import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { searchTodo } from "../../../../store/actions/todos"
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

=======
import React, { PureComponent } from "react"
import styled from "styled-components"
import { SearchInput } from "../../../../components/UI/Input/Input"

class SearchBlock extends PureComponent {
  // state is here

  render() {
    const { onSearchChange, searchTitle } = this.props
>>>>>>> 50d70896c4a9e94f4949f2b6f972b4c35e64e2d3
    return (
      <Wrapper>
        <label htmlFor="search">Search</label>
        <SearchInput
<<<<<<< HEAD
          onChange={this.changeTitleFilter}
          id="search"
          type="text"
          value={value}
=======
          id="search"
          type="text"
          onChange={onSearchChange}
          value={searchTitle}
>>>>>>> 50d70896c4a9e94f4949f2b6f972b4c35e64e2d3
        />
      </Wrapper>
    )
  }
}

<<<<<<< HEAD
const mapDispatchToProps = dispatch => ({
  searchByTitle: title => dispatch(searchTodo(title)),
})

export default connect(null, mapDispatchToProps)(SearchBlock)
=======
export default SearchBlock
>>>>>>> 50d70896c4a9e94f4949f2b6f972b4c35e64e2d3

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`
