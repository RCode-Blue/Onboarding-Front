import { GET_TEMPLATES } from '../actions/types';

export default function(state = [], action){
  // console.log(action);
  switch(action.type){
    case GET_TEMPLATES:
      return action.payload

    default:
      return state;
  }
}