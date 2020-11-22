import React, { useEffect, useState } from 'react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import LaunchAnimation from './LaunchAnimation';


interface IPrepareForGame {
  startGame: () => void;
  name: string;
  active: boolean;
}
const PrepareForGame = (props: IPrepareForGame): ReactElement => {
  const [launch, setLaunch] = useState(false);
  const launchTime = 6000;

  useEffect(() => {
    if(launch){
      const timerToLaunch = setTimeout(() => {
        props.startGame()
      }, launchTime);

      return () => {
        clearTimeout(timerToLaunch)
      };
    }
  },[launch]);

  const setLaunchToTrue = () => {
    setLaunch(true)
  }

  if (props.active){
    return(
      <div className="prepare-for-game">
        <div className="play-wrapper">
          <div className="play-button">
          </div>
        </div>
      </div>
      )
  } else {
    return(
        !launch ? 
          <div className="prepare-for-game">
            <div className="play-wrapper">
                <div onClick={setLaunchToTrue} className="play-button">
                  <i className="fas fa-play"></i>
                </div>
            </div>
            <div className="start-text">Start the game</div>
            <Link
              className="back-to-desc"
              to={`/${props.name}`}
            >
              Instructions
            </Link>
          </div>
        :
        <div className="prepare-for-game">
          <LaunchAnimation duration={launchTime}/>
        </div>
      )
  }
  
}
export default PrepareForGame