import './GamesList.css';

import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export const GamesList = (props:{
  allGames: {
    gamesArray: IGame[]
  }
}): ReactElement => {
  return (
    <ul className="game-list">
      {props.allGames.gamesArray.map(
        (game, id)=>{
          const {name} = game;
          return(
            <li key={id} className="game-list-item">
              <Link className="game-list-item-link"to={`/${name}`}>{name}</Link>
            </li>
          )
        }
      )}
    </ul>
  
  )
}
