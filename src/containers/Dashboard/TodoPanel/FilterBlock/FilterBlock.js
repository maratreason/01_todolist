import React, { PureComponent } from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import Radio from "../../../../components/UI/Radio/Radio"
import { changeBtn } from "../../../../store/actions/todos"

class FilterBlock extends PureComponent {
  state = {
    value: "all",
  }

  onChangeHandler = event => {
    const { changeRadioBtn } = this.props
    const { id } = event.target

    changeRadioBtn(id)
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
  changeRadioBtn: id => dispatch(changeBtn(id)),
})

export default connect(null, mapDispatchToProps)(FilterBlock)

const Wrapper = styled.div`
  display: flex;
`
