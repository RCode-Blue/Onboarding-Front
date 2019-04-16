import axios from 'axios';
import { 
  FETCH_USER, 
  GET_TEMPLATES, 
  GET_TEMPLATE_POSITIONS, 
  GET_SETS, 
  GET_SET, 
  GET_USER_DETAILS,
  GET_MANAGER_DETAILS,
  GET_BUDDY_DETAILS,
  GET_INSTRUCTOR_DETAILS } from './types';



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
};



export const getSet = (set_id) => async dispatch => {
  const res = await axios.get('/api/tasklist/'+set_id);
  // console.log(res);
  dispatch({ type: GET_SET, payload: res.data});
};


export const getUserDetails = (user_id) => async dispatch => {
  const res = await axios.get('/api/user/'+user_id);
  // const res = await axios.get('/api/templates');
  // console.log(res);
  dispatch({ type: GET_USER_DETAILS, payload: res.data });
};


export const getManagerDetails = (user_id) => async dispatch => {
  const res = await axios.get('/api/user/'+user_id);
  // const res = await axios.get('/api/templates');
  // console.log(res);
  dispatch({ type: GET_MANAGER_DETAILS, payload: res.data });
};


export const getBuddyDetails = (user_id) => async dispatch => {
  const res = await axios.get('/api/user/'+user_id);
  // const res = await axios.get('/api/templates');
  // console.log(res);
  dispatch({ type: GET_BUDDY_DETAILS, payload: res.data });
};


export const getInstructorDetails = (user_id) => async dispatch => {
  const res = await axios.get('/api/user/'+user_id);
  // const res = await axios.get('/api/templates');
  // console.log(res);
  dispatch({ type: GET_INSTRUCTOR_DETAILS, payload: res.data });
};