import React, { Component } from "react"
import styled from "styled-components"

import Radio from "../../../../components/UI/Radio/Radio"

class FilterBlock extends Component {
  state = {
    value: "all",
  }

  onChangeHandler = (event) => {
    const { filterByCompleteness } = this.props
    const { id } = event.target
    filterByCompleteness(id)
    this.setState({
      value: id,
    })
  }

  render() {
    // const { onRadioChange } = this.props
    const { value } = this.state

    return (
      <Wrapper>
        <Radio
          checked={value === "all"}
          title="All"
          id="all"
          groupName="completeness"
          // onChange={onRadioChange}
          onChange={this.onChangeHandler}
        />
        <Radio
          checked={value === "completed"}
          title="Completed"
          id="completed"
          groupName="completeness"
          // onChange={onRadioChange}
          onChange={this.onChangeHandler}
        />
        <Radio
          checked={value === "uncompleted"}
          title="Uncompleted"
          id="uncompleted"
          groupName="completeness"
          // onChange={onRadioChange}
          onChange={this.onChangeHandler}
        />
      </Wrapper>
    )
  }
}

export default FilterBlock

const Wrapper = styled.div`
  display: flex;
`
