import axios from 'axios';
import { FETCH_USER, GET_TEMPLATES } from './types';


export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/getcurrentuser');
  dispatch({ type: FETCH_USER, payload: res.data });
};
