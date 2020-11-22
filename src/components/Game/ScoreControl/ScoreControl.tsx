import './ScoreControl.css';

import React, { ReactElement } from 'react';
import { connect } from 'react-redux';

const ScoreControl = (props:{
  launchedGame: ILaunchedGame;
}): ReactElement => {
  

  return(
    <div className="score-control">
      <div className="score-control-content">
        <div className="score-text">score</div>
        <div className="score-display">
          {props.launchedGame.score}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (
  state: {
    launchedGame: ILaunchedGame;
  }
) => {
  const { launchedGame } = state;
  return { launchedGame };
}

export default connect(
  mapStateToProps, 
  {}
)(ScoreControl);