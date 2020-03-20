import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { fetchTodoList } from "../../../store/actions/todos"

class Pagination extends Component {
  state = {
    currentPage: 1,
  }

  render() {
    const { length, limit, onPageChanged, changePage } = this.props
    const { currentPage } = this.state

    const pagesCount = Math.ceil(length / limit)
    const pages = []

    for (let index = 1; index <= pagesCount; index += 1) {
      pages.push(index)
    }

    const pagination = pages.map((page, index) => {
      if (page >= length) {
        return false
      }

      return (
        <Link
          key={page}
          onClick={() => {
            onPageChanged(page)
            changePage(page)
            this.setState({ currentPage: index + 1 })
          }}
          active={index + 1 === currentPage}
        >
          {page}
        </Link>
      )
    })

    return <PaginationWrapper>{pagination}</PaginationWrapper>
  }
}

const mapDispatchToProps = dispatch => ({
  changePage: page => dispatch(fetchTodoList({ _page: page })),
})

export default connect(null, mapDispatchToProps)(Pagination)

const PaginationWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`

const Link = styled.li`
  margin: 0 5px;
  background-color: ${props => (props.active ? "#e7e7e7" : "#ccc")};
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #e7e7e7;
  }
`
