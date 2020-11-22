import './EndScreen.css';

import React, { ReactElement } from 'react';
import { connect } from 'react-redux';

const EndScreen = (
  props: {
    farewell_text: string;
    score: number;
  }): ReactElement =>{
  return (
    <div className="game-double-trouble-end">
      <div className="game-end-header">
        Thank you!
      </div>
      <div className="score-box">Your score is {props.score}</div>
      <div className="farewell-text">{props.farewell_text}</div>
    </div>
  )
}

const mapStateToProps = (
  state: {
    currentGame: {
      farewell_text:string
    };
    launchedGame: {
      score: number
    };
  }
) => {
  const { currentGame, launchedGame } = state;
  const {score} = launchedGame;
  const {farewell_text} = currentGame;
  return { farewell_text, score };
}

export default connect(
  mapStateToProps, 
  {}
)(EndScreen);