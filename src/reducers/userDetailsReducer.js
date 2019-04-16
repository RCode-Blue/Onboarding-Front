import { GET_USER_DETAILS } from '../actions/types';

export default function(state = null, action){
  // console.log(action);
  switch (action.type) {
    case GET_USER_DETAILS:
      return action.payload;

    default:
      return state;
  }
}