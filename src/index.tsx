import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import GameApp from './Game-App';
import store from './redux/store';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <GameApp />
  </Provider>,
  rootElement
);
