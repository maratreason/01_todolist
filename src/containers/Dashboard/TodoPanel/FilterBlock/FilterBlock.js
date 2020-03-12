<<<<<<< HEAD
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
=======
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
>>>>>>> 50d70896c4a9e94f4949f2b6f972b4c35e64e2d3
    const { value } = this.state

    return (
      <Wrapper>
        <Radio
          checked={value === "all"}
          title="All"
          id="all"
          groupName="completeness"
<<<<<<< HEAD
=======
          // onChange={onRadioChange}
>>>>>>> 50d70896c4a9e94f4949f2b6f972b4c35e64e2d3
          onChange={this.onChangeHandler}
        />
        <Radio
          checked={value === "completed"}
          title="Completed"
          id="completed"
          groupName="completeness"
<<<<<<< HEAD
=======
          // onChange={onRadioChange}
>>>>>>> 50d70896c4a9e94f4949f2b6f972b4c35e64e2d3
          onChange={this.onChangeHandler}
        />
        <Radio
          checked={value === "uncompleted"}
          title="Uncompleted"
          id="uncompleted"
          groupName="completeness"
<<<<<<< HEAD
=======
          // onChange={onRadioChange}
>>>>>>> 50d70896c4a9e94f4949f2b6f972b4c35e64e2d3
          onChange={this.onChangeHandler}
        />
      </Wrapper>
    )
  }
}

<<<<<<< HEAD
const mapDispatchToProps = dispatch => ({
  changeRadioBtn: id => dispatch(changeBtn(id)),
})

export default connect(null, mapDispatchToProps)(FilterBlock)
=======
export default FilterBlock
>>>>>>> 50d70896c4a9e94f4949f2b6f972b4c35e64e2d3

const Wrapper = styled.div`
  display: flex;
`
