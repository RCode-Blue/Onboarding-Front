import { USER_LOGIN_FE } from '../actions/types';

export default function(state = null, action){
  switch(action.type){
    case USER_LOGIN_FE:
      return action.payload;

    default:
      return state;
  }
}
 