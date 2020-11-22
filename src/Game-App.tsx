import './Game-App.css';

import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Game from './components/Game/Game';
import GamePage from './components/GamePage/GamePage';
import LandingPage from './components/LandingPage/LandingPage';

const GameApp: FC = (): ReactElement => {
  return (
    
    <div className="game-app">
      <div className="wrapper">
      <Router>
        <Switch>
          <Redirect from="/GameAppDeploy" exact to="/" />
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/:name" component={GamePage}/>
          <Route path="/:name/play" component={Game}/>
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default GameApp;
