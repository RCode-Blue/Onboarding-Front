import { POST_NEW_SET } from "../actions/types";

export default function(state = null, action){
  switch(action.type){
    case POST_NEW_SET:
      return action.payload;
    default:
      return state;
  }
}