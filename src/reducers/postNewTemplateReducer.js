import { POST_NEW_TEMPLATE } from "./actions/types";

export default function(state = null, action){
  switch(action.type){
    case POST_NEW_TEMPLATE:
      return action.payload;
    default:
      return state;
  }
}