import React, { PureComponent } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import { fetchTodoList } from "../../../../store/actions/todos"

import Radio from "../../../../components/UI/Radio/Radio"

class FilterBlock extends PureComponent {
  state = {
    value: "all",
  }

  onChangeHandler = event => {
    const { filter } = this.props
    const { id } = event.target

    switch (id) {
      case "all":
        filter(null)
        break
      case "completed":
        filter(true)
        break
      case "uncompleted":
        filter(false)
        break
      default:
        filter(null)
        break
    }

    this.setState({ value: id })
  }

  render() {
    const { value } = this.state

    return (
      <Wrapper>
        <Radio
          checked={value === "all"}
          title="All"
          id="all"
          groupName="completeness"
          onChange={this.onChangeHandler}
        />
        <Radio
          checked={value === "completed"}
          title="Completed"
          id="completed"
          groupName="completeness"
          onChange={this.onChangeHandler}
        />
        <Radio
          checked={value === "uncompleted"}
          title="Uncompleted"
          id="uncompleted"
          groupName="completeness"
          onChange={this.onChangeHandler}
        />
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  filter: done => dispatch(fetchTodoList({ done })),
})

export default connect(null, mapDispatchToProps)(FilterBlock)

const Wrapper = styled.div`
  display: flex;
`
