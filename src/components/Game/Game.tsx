import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import DoubleTrouble from './DoubleTrouble/DoubleTrouble';

interface IGameProps extends RouteComponentProps<{ name: string}> {
  currentGame: IGame;
}
const Game = (props: IGameProps): ReactElement => {
  
  return (
    <div className="game">
      {props.currentGame.name === 'Double Trouble'
      ? <DoubleTrouble {...props}/>
      : null}
    </div>
  )
};

const mapStateToProps = (
  state: {
    currentGame: IGame;
  }
) => {
  const { currentGame } = state;
  return { currentGame };
}

export default connect(
  mapStateToProps, 
  {}
)(Game);