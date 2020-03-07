import React, {Component} from 'react';

class SearchBlock extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search">Search</label>
        <input id="search" type="text" />
      </div>
    );
  }
}

export default SearchBlock;
