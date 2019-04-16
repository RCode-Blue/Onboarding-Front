import { GET_MANAGER_DETAILS } from '../actions/types';

export default function(state = null, action){
  // console.log(action);
  switch (action.type) {
    case GET_MANAGER_DETAILS:
      return action.payload;

    default:
      return state;
  }
}