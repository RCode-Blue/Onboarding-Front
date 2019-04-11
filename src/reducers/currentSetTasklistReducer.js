import { GET_SET_TASKLIST }  from '../actions/types';

export default function(state = null, action){
  switch(action.type){
    case GET_SET_TASKLIST:
      return action.payload;
    
      default:
        return state;
  }
}