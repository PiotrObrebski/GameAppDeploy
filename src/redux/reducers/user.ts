import { SET_USER } from '../actionTypes';

const initialState = {
  id: '',
  name: '',
  email: ''
};

export default function(state = initialState, action: { type: string, payload: User }): User {
  switch (action.type) {
    case SET_USER: 
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email
      }
    default: 
      return state;
  }
}
