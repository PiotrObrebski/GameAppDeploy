import './SoundControl.css';

import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';

import { toggleSound } from '../../../redux/actions';

const SoundControl = (props:{
  toggleSound: () => void;
  launchedGame: ILaunchedGame;
}): ReactElement => {

  useEffect(()=>{
    // if sound element exist line below should be implemented
    // props.launchedGame.volume ? unMutePage() : mutePage();
  }, [props.launchedGame.volume]);
  
  return(
    <div className="sound-control">
      <div onClick={props.toggleSound} className={`sound-control-button${props.launchedGame.volume ? ' sound-control-button-active' : ''}`}>
        {
          props.launchedGame.volume
          ?
          <i className="fas fa-volume-up"></i>
          : 
          <i className="fas fa-volume-mute"></i>
        }
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
  {
    toggleSound
  }
)(SoundControl);