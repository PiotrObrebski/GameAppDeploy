import './TimeControl.css';

import React, { useEffect, useState } from 'react';
import { ReactElement } from 'react';
import { connect } from 'react-redux';

const TimeControl = (
  props:{
    currentGame: IGame
    active: boolean
  }
): ReactElement => {
  const [seconds, setSeconds] = useState(0);
  let gameTime = props.currentGame.time - seconds;

  useEffect(() => {

    if(props.active){
      const intervalCountDown = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000);

      return () => {
        gameTime = props.currentGame.time;
        setSeconds(0);
        clearTimeout(intervalCountDown)
      };
    }
  },[props.active]);

  const sliderAnimation = () => {
    const sliderTransition = props.active ? 
      {
        transition: `all ${props.currentGame.time.toString()}s linear`
      } : {
        transition: '0s'
      }

    return sliderTransition
  }

  const generateSliderClassName = () => {
    const sliderClassName = props.active ? 'time-control-slider time-control-slider-hidden' : 'time-control-slider';

    return sliderClassName;
  }

  return(
  <div className="time-control">
    <div className="time-control-top">
      <div className={generateSliderClassName()}>
        <div style={sliderAnimation()} className="slider-bar"></div>
      </div>
    </div>
    <div className="time-control-bottom">
      <div className="time-control-bottom-content">
        <div className="time-control-text">time</div>
        <div className="time-control-number">
          {gameTime}
        </div>
      </div>
    </div>
  </div>
)}

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
)(TimeControl);