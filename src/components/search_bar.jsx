import React, { Component } from 'react';
import './search_bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    // all the value comes from 'this.state'
    return (
      <div>
        <input
          value = {this.state.term}
          onChange = {
            (e) => {
              this.setState({
                term: e.target.value
              });
            }
          }
        />
      <p>{this.state.term}</p>
      </div>
    )
  }
}

export default SearchBar;
