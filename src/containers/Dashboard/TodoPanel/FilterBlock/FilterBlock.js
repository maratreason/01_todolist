import React, { Component } from "react"
import styled from "styled-components"

import Radio from "../../../../components/UI/Radio/Radio"

class FilterBlock extends Component {
  render() {
    const { onRadioChange } = this.props

    return (
      <Wrapper>
        <Radio
          title="All"
          id="all"
          groupName="completeness"
          onChange={onRadioChange}
        />
        <Radio
          title="Completed"
          id="completed"
          groupName="completeness"
          onChange={onRadioChange}
        />
        <Radio
          title="Uncompleted"
          id="uncompleted"
          groupName="completeness"
          onChange={onRadioChange}
        />
      </Wrapper>
    )
  }
}

export default FilterBlock

const Wrapper = styled.div`
  display: flex;
`
