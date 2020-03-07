import React, {Component} from 'react';
import styled from 'styled-components'

import AddItemBlock from "./AddItemBlock/AddItemBlock";
import FilterBlock from "./FilterBlock/FilterBlock";
import SearchBlock from "./SearchBlock/SearchBlock";

class TodoPanel extends Component {
  render() {
    return (
      <Wrapper>
        <AddItemBlock />
        <FilterBlock />
        <SearchBlock />
      </Wrapper>
    );
  }
}

export default TodoPanel;

const Wrapper = styled.div`
`
