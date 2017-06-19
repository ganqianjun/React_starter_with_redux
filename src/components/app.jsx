import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultFromSearchBar: 'Not Found'
    };
  }

  getResultFromSearchBar(term) {
    this.setState({
      resultFromSearchBar : term
    });
  }
  // the returned 'html' should be included within one tag
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <SearchBar testProps="From app - for test"
                       getResult={(term) => {
                         this.getResultFromSearchBar(term)
                       }}/>
            <div>Hello React Starter!</div>
            <div>{this.state.resultFromSearchBar}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
