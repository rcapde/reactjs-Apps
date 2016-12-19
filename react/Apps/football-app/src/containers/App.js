import React, { Component } from 'react';
import logo from '../assets/fball.png';
import ScoreBox from '../components/scorebox';
import Table from '../components/table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchScores } from '../actions/index';

import '../assets/App.css';

class App extends Component {

componentWillMount(){
  this.props.fetchScores()
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>Scores</h4>
          <h4>Standings</h4>
        </div>
        <div className='App-intro'>
          <ScoreBox />
          <Table />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchScores }, dispatch);
}


export default connect(null, mapDispatchToProps)(App);
