import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';

class App extends Component {
  // the returned 'html' should be included within one tag
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <SearchBar />
            <div>Hello React Starter!</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
