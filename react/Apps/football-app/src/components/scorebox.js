import React, { Component } from 'react';
import Score from './score'
import '../assets/App.css';
import { connect } from 'react-redux';

class ScoreBox extends Component {

  render() {

    const Scores = this.props.scores.map((score)=>{
      return(
        <Score id={score.id} HomeTeam={score.HomeTeam} AwayTeam={score.AwayTeam} FTHG={score.FTHG} FTAG={score.FTAG}/>
      );
    })
    return (
        <div className="scorebox">
          {Scores}
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
