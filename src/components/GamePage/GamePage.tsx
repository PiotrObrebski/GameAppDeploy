import './GamePage.css';

import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import { GAMES_END_POINT } from '../../api-end-points';
import { getDataFromServer } from '../../api-helper';
import { setCurrentGame } from '../../redux/actions';
import descImage from './desc-img/double-trouble-desc.png';

interface IGamePageProps extends RouteComponentProps<{ name: string}> {
  allGames: { gamesArray: IGame[] };
  currentGame: IGame;
  setCurrentGame: (content: IGame) => void;
}

const GamePage = (props: IGamePageProps): ReactElement => {
  useEffect(() => {

    const chosenGame:IGame[] = props.allGames.gamesArray.filter(
      obj => {
        return obj.name === props.match.params.name
      }
    );

    getDataFromServer(GAMES_END_POINT+chosenGame[0]?.id)
    .then( response => {
      props.setCurrentGame(response)
    })
    
  }, []);
  return (
    <div className="game-page">
      <p className="game-page-header">Instructions</p>
      <p className="intro-text">{props.currentGame.intro_text}</p>
      {props.currentGame.name === "Double Trouble" ?
      <img
        className="desc-img"
        src={descImage}
        alt="game-description"/>
      : null }
        <Link className="btn-confirm"to={`/${props.currentGame.name}/play`}>I understand</Link>
    </div>
  )
}

const mapStateToProps = (
  state: {
    user: User;
    allGames: { gamesArray: IGame[] };
    currentGame: IGame;
  }
) => {
  const { user, allGames, currentGame } = state;
  return { user, allGames, currentGame };
}

export default connect(
  mapStateToProps, 
  {
    setCurrentGame
  }
)(GamePage);