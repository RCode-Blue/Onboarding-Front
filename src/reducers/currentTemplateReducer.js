import { GET_TEMPLATE_POSITIONS } from '../actions/types';

export default function(state = [], action){
  switch(action.type){
    case GET_TEMPLATE_POSITIONS:
      return action.payload

    default:
      return state;
  }
}