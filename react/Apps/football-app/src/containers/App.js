import React, { Component } from 'react';
import ScoreBox from '../components/scorebox';
import Table from '../components/table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchScores } from '../actions/index';

import '../assets/App.css';

class App extends Component {

componentWillMount(){
  this.props.fetchScores()

  this.state = {
    page: 'scorebox',
    one: true,
    two: false,
  };
}
onClick(){
  this.setState({
    page: 'scorebox',
    one: true,
    two: false,
})
}
onClick2(){
  this.setState({
    page: 'table',
    one: false,
    two: true,
   })
}
  render() {
    let code = <ScoreBox />;

  if(this.state.page=='scorebox'){
      code = <ScoreBox />

    }
  if(this.state.page=='table'){
      code = <Table />

    }
    return (
      <div className="App">
        <div className="App-header">
          <a className={this.state.one ? 'selected' : 'unselected'} id="one" onClick={this.onClick.bind(this)} ><p>Scores</p></a>
          <a className={this.state.two ? 'selected' : 'unselected'} id="two" onClick={this.onClick2.bind(this)} ><p>Standings</p></a>
        </div>
        <div className='App-intro'>
        {code}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchScores }, dispatch);
}


export default connect(null, mapDispatchToProps)(App);
