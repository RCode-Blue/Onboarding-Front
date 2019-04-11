import axios from 'axios';
import { FETCH_USER, GET_TEMPLATES, GET_TEMPLATE_POSITIONS, GET_SETS, GET_SET_TASKLIST } from './types';



export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/getcurrentuser');
  // console.log(res);
  dispatch({ type: FETCH_USER, payload: res.data });
};


export const getTemplates = () => async dispatch => {
  const res = await axios.get('/api/templates');
  // console.log(res); 
  dispatch({ type: GET_TEMPLATES, payload: res.data.templates });
};


export const getTemplatePositions = (_id) => async dispatch => {
  // const queryString = '/api/template?template_id=' + _id;
  // const res = await axios.get(queryString);
  const res = await axios.get('/api/template?template_id='+_id);

  // console.log(res.data);
  dispatch({ type: GET_TEMPLATE_POSITIONS, payload: res.data });
};


export const getSets = (user_id) => async dispatch => {
  const res = await axios.get('/api/sets?employee_id='+user_id);
  // console.log(res);
  dispatch({ type: GET_SETS, payload: res.data.sets });
}


export const getSetPositions = (set_id) => async dispatch => {
  const res = await axios.get('/api/tasklist/'+set_id);
  console.log(res);
  dispatch({ type: GET_SET_TASKLIST, payload: res.data.tasks})
}