import { SET_CURRENT_GAME } from '../actionTypes';

const initialState =  {
  id:'',
  name:'',
  intro_text:'',
  farewell_text:'',
  time: 0
};

export default function(
  state = initialState,
  action: {
    type: string,
    payload: IGame
  }): IGame {
  switch (action.type) {
    case SET_CURRENT_GAME: 
      return {
        id: action.payload.id,
        name: action.payload.name,
        intro_text: action.payload.intro_text,
        farewell_text: action.payload.farewell_text,
        time: action.payload.time
      };
    default:
      return state
  }
}
