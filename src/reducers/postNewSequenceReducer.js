import { POST_NEW_SEQUENCE } from "../actions/types";

export default function(state = null, action){
  switch(action.type){
    case POST_NEW_SEQUENCE:
      return action.payload;
    default:
      return state;
  }
}