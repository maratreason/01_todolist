import React, { Component } from "react"
import "./Paginate.css"

// eslint-disable-next-line react/prefer-stateless-function
export default class Paginate extends Component {
  render() {
    const { length, currentPage, limit, onPageChanged } = this.props

    const pagesCount = Math.ceil(length / limit)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    const pagination = pages.map(p => {
      if (p >= length) return

      return (
        <li
          key={p}
          className={currentPage === p ? "selectedPage" : ""}
          onClick={() => onPageChanged(p)}
        >
          {p}
        </li>
      )
    })

    return <ul className="pagination">{pagination}</ul>
  }
}
