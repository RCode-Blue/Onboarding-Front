import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => {
  // axios.get('/getcurrentuser');
  return function(dispatch) {
    axios
      .get('/api/getcurrentuser')
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};