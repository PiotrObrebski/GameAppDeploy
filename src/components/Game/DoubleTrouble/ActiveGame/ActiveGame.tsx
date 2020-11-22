import './ActiveGame.css';

import React, { ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { changeScore } from '../../../../redux/actions';
import X from '../icons/X.svg';

const ActiveGame = (props:{
  launchedGame: ILaunchedGame;
  changeScore: (content: ILaunchedGame) => void;
}): ReactElement => {
  const [header, setHeader] = useState({color: '', text: ''});
  const [button1, setButton1] = useState({color: '', text: ''});
  const [button2, setButton2] = useState({color: '', text: ''});
  const headerElement = document.getElementById('header');
  
  const blueOrRedText = () => {
    return Math.random() >= 0.5 ? 'blue' : 'red'
  }
  const blueOrRedColor = () => {
    return Math.random() >= 0.5 ? '#0081FF' : '#FF0000'
  }

  useEffect(()=>{
    setNewPage();
  }, []);

  const checkIfRight = (event: React.MouseEvent<HTMLElement>) => {
    const buttonContent = (event.target as Element).parentElement?.querySelector('.active-game-button-text')?.textContent?.toLowerCase();
    const headerColor = headerElement?.style.color === 'rgb(0, 129, 255)' ? 'blue' : 'red';

    return buttonContent === headerColor ? true : false ;
  }

  const setNewPage = ()=>{
    const newButton1Text = blueOrRedText();
    const newButton2Text = newButton1Text === 'blue' ? 'red': 'blue';
    const newButton1Color = blueOrRedColor();
    const newButton2Color = newButton1Color === '#FF0000' ? '#0081FF' : '#FF0000';
    
    setHeader({text: blueOrRedText(), color: blueOrRedColor()});
    setButton1({text: newButton1Text, color: newButton1Color});
    setButton2({text: newButton2Text, color: newButton2Color});
  };
  
  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    if(!checkIfRight(event)){
      const elementOverlay = (event.target as Element).parentElement?.querySelector('.overlay');
      elementOverlay?.classList.remove('hidden');
      
      setTimeout(()=>{
        elementOverlay?.classList.add('hidden');

        setNewPage()
        if (props.launchedGame.score > 0){
          props.changeScore({
            ...props.launchedGame,
            score: props.launchedGame.score - 1
          })
        }
      }, 500);
      
      return
    }
    
    setNewPage()
    props.changeScore({
      ...props.launchedGame,
      score: props.launchedGame.score + 1
    })
  }

  return(
    <div className="active-game">
      <div id='header' style={{color: header.color}} className="active-game-header">{header.text.toUpperCase()}</div>
      <div className="active-game-buttons">
        <button id='btn1' onClick={handleButtonClick} style={{color: button1.color}} className=" active-game-button">
          <p className="absolute active-game-header active-game-button-text">
            {button1.text.toUpperCase()}
          </p>
          <div className="absolute overlay hidden">
            <img className="absolute" src={X} alt=""/>
            </div>
        </button>
        <button id='btn2' onClick={handleButtonClick} style={{color: button2.color}} className="active-game-button">
          <p className="absolute active-game-header active-game-button-text">
            {button2.text.toUpperCase()}
          </p>
          <div className="absolute overlay hidden">
            <img className="absolute" src={X} alt=""/>
            </div>
        </button>
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
    changeScore
  }
)(ActiveGame);