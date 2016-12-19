import React, { Component } from 'react';

import logo from '../assets/penguin.png';
import '../assets/App.css';

import SearchBar from '../components/search_bar';
import Results from '../containers/results';


class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <h2> RC Airways</h2>
        </div>
        <div className="App-content">
          <SearchBar />
          <h1>Feel the Prespective</h1>
          <Results/>
        </div>
      </div>
    );
  }
}


export default App
