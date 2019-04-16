import { GET_SET } from '../actions/types';

export default function(state = null, action){
  // console.log(action);
  switch(action.type){
    case GET_SET:
      return action.payload;

    default:
      return state;
  }
}