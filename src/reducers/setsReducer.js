import { GET_SETS } from '../actions/types';

export default function(state = null, action){
  // console.log(action);
  switch(action.type){
    case GET_SETS:
      return action.payload;

    default:
      return state;
  }

}