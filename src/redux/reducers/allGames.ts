import { SET_All_GAMES } from '../actionTypes';

const initialState =  {
  gamesArray: [
    {
      id:'',
      name:'',
      intro_text:'',
      farewell_text:'',
      time: 0
    }
  ]
};

export default function(
    state = initialState,
    action: {
      type: string;
      payload: IGame[];
    }
  ): {
    gamesArray: Array<IGame>
  } {
  switch (action.type) {
    case SET_All_GAMES: 
      return {
        ...state,
        gamesArray: action.payload
      }
    default:
      return state
  }
}
