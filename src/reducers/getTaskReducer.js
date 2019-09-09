import { GET_TASK } from "../actions/types"

export default function(state = null, action){
  switch(action.type){
    case GET_TASK:
      return action.payload;
    default:
      return state;
  }
}