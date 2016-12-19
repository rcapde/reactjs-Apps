import React, { Component } from 'react';
import '../assets/App.css';

class Score extends Component {
  render() {
    return (
      <div className="score">
        <span>{this.props.team1}</span>
        <span className="result"> 0 - 5 </span>
        <span>Team 2</span>
      </div>
    );
  }
}

export default Score;
