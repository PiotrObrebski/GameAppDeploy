import './DoubleTrouble.css';

import React, { useEffect } from 'react';
import { ReactElement } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { SCORE_END_POINT } from '../../../api-end-points';
import { putScoreOnServer } from '../../../api-helper';
import { setFinishedTrue, startGame, stopGame } from '../../../redux/actions';
import ScoreControl from '../ScoreControl/ScoreControl';
import SoundControl from '../SoundControl/SoundControl';
import TimeControl from '../TimeControl/TimeControl';
import ActiveGame from './ActiveGame/ActiveGame';
import EndScreen from './EndScreen/EndScreen';
import PrepareForGame from './PrepareForGame';

interface IDoubleTroubleProps extends RouteComponentProps<{ name: string}> {
  user: User;
  currentGame: IGame;
  launchedGame: ILaunchedGame;
  startGame: () => void;
  stopGame: () => void;
  setFinishedTrue: () => void;
}
const DoubleTrouble = (props: IDoubleTroubleProps): ReactElement => {
  
  useEffect(()=>{
    if (props.launchedGame.gameActive){
      const timer = setTimeout(() => {
        props.stopGame();
        props.setFinishedTrue();
      }, props.currentGame.time*1000);

      return () => clearTimeout(timer);
    }
  },[props.launchedGame.gameActive]);
  
  useEffect(()=>{
    if(props.launchedGame.finished){
      putScoreOnServer(SCORE_END_POINT, {
        user_id: props.user.id,
        score: props.launchedGame.score.toString(),
        game_id: props.currentGame.id
      })
    }
  },[props.launchedGame.finished]);

  if(props.launchedGame.finished){
    return (
      <EndScreen/>
    )
  } else {

    return (
      <div className="game-double-trouble">
        <div className="game-double-trouble-body">
          {!props.launchedGame.gameActive ? 
            <PrepareForGame active={props.launchedGame.gameActive} startGame={props.startGame} name={props.currentGame.name}/> : 
            <ActiveGame/>
          }
        </div>
        
        <div className="game-double-trouble-aside">        
          <div className="aside-timer dark-gradient">
            <TimeControl active={props.launchedGame.gameActive}/>
          </div>
          <div className="aside-score dark-gradient">
            <ScoreControl/>
          </div>
          <div className="aside-sound dark-gradient">
            <SoundControl/>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (
  state: {
    user: User;
    currentGame: IGame;
    launchedGame: ILaunchedGame;
  }
) => {
  const { user, currentGame, launchedGame } = state;
  return { user, currentGame, launchedGame };
}

export default connect(
  mapStateToProps, 
  {
    startGame,
    stopGame,
    setFinishedTrue
  }
)(DoubleTrouble);