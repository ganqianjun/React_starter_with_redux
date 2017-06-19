import React, { Component } from 'react';

// the reason that import css could work here is that
// under 'webpack.config.js' we add CSS loader under rules
// If we don't have webpack, we could just copy css file to public folder
// and add it to index.html
import './search_bar.css';

class SearchBar extends Component {
  // we need props as the params of 'constructor' and 'super'
  // because we need to use 'this.props' in 'constructor'
  // it won't affect we use 'this.props' out of 'constructor', like 'render'
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    console.log(this.props.testProps);
  }

  render() {
    // all the value comes from 'this.state'
    return (
      <div className="input-group search-bar">
        <i className="input-group-addon  glyphicon glyphicon-search" aria-hidden="true"></i>
        <input className="form-control"
          value = {this.state.term}
          onChange = {
            (e) => {
              this.setState({
                term: e.target.value
              });
              this.props.getResult(e.target.value);
            }
          }
        />
      <p>{this.state.term}</p>
      </div>
    )
  }
}

export default SearchBar;
