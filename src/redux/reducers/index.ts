import { combineReducers } from 'redux';

import allGames from './allGames';
import currentGame from './currentGame';
import launchedGame from './launchedGame';
import user from './user';

export default combineReducers({ user, currentGame, allGames, launchedGame });
