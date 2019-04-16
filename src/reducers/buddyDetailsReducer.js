import { GET_BUDDY_DETAILS } from '../actions/types';

export default function(state = null, action){
  // console.log(action);
  switch (action.type) {
    case GET_BUDDY_DETAILS:
      return action.payload;

    default:
      return state;
  }
}