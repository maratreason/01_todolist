import React, {Component} from 'react';
import styled from 'styled-components'

import Radio from "../../../../components/UI/Radio/Radio";

class FilterBlock extends Component {
  render() {
    return (
      <Wrapper>
        <Radio
          checked
          title="All"
          id="all"
          groupName="completeness"
          onChange={() => {}}
        />
        <Radio
          title="Completed"
          id="completed"
          groupName="completeness"
          onChange={() => {}}
        />
        <Radio
          title="Uncompleted"
          id="uncompleted"
          groupName="completeness"
          onChange={() => {}}
        />
      </Wrapper>
    );
  }
}

export default FilterBlock;

const Wrapper = styled.div`
  display: flex;
`
