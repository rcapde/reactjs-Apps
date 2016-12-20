import React, { Component } from 'react';
import '../assets/App.css';

class Score extends Component {
  render() {
    return (
      <div className="score">
        <div className="team">
          <a href="/" className="logo">
          </a>
          {this.props.team1}
        </div>
        <span className="result"> 0 - 5 </span>
        <div className="team">
          <a href="/" className="logo" />
          ABL
        </div>
        <div className="rightpart">
            <a href="/">live</a>
            <a href="/">stats</a>
        </div>
      </div>
    );
  }
}

export default Score;
