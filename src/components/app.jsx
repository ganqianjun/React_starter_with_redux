import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';

class App extends Component {
  // the returned 'html' should be included within one tag
  render() {
    return (
      <div>
        <SearchBar />
        <div>Hello React Starter!</div>
      </div>
    )
  }
}

export default App;
