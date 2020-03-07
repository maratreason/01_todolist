import React, {Component} from 'react';
import styled from 'styled-components'

class Radio extends Component {
  render() {
    const { title, id, groupName, checked, onChange } = this.props

    return (
      <Wrapper>
        <label htmlFor={id}>{title}</label>
        <input
          checked={checked}
          id={id}
          type="radio"
          name={groupName}
          onChange={onChange}
        />
      </Wrapper>
    );
  }
}

export default Radio;

const Wrapper = styled.div`
  padding: 5px;
`
