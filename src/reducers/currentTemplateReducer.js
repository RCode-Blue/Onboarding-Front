import { GET_TEMPLATE_POSITIONS } from '../actions/types';

export default function(state = [], action){
  // console.log(action)
  switch(action.type){
    case GET_TEMPLATE_POSITIONS:
      // return action.payload.positions
      return action.payload;

    default:
      return state;
  }
}