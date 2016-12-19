import React, { Component } from 'react';
import Score from './score'
import '../assets/App.css';
import { connect } from 'react-redux';

class ScoreBox extends Component {
  render() {
    console.log(this.props.scores)
    return (
      <div className="scorebox">
        <Score team1={this.props.scores} />
        
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    scores: state.scores.data,
  };
}

export default connect(mapStateToProps)(ScoreBox);
