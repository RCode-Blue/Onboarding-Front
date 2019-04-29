import { GET_ALL_TASKS } from '../actions/types';

export default function(state = null, action){
  switch(action.type){
    case GET_ALL_TASKS:
      return action.payload;

    default:
      return state;
  }
}