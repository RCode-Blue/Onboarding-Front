import axios from 'axios';
import { 
  FETCH_USER, 
  GET_TEMPLATES, 
  GET_TEMPLATE_POSITIONS, 
  GET_SETS, 
  GET_SET, 
  GET_ALL_USERS, 
  GET_USER_DETAILS,
  GET_MANAGER_DETAILS,
  GET_BUDDY_DETAILS,
  GET_INSTRUCTOR_DETAILS,
  GET_ALL_TASKS,
  GET_TASK, 
  GET_UNALLOCATED_TASKS,
  EDIT_TASK,
  CHANGE_SET_TASK,
  POST_NEW_TASK,
  POST_NEW_SET,
  POST_NEW_SEQUENCE,
  POST_NEW_TEMPLATE} from './types';


// AXIOS GET
// #region

// Gets currently logged-in user
export const fetchUser = () => async dispatch => {
  console.log("GetCurrentUser");
  const res = await axios.get('/api/getcurrentuser');
  // const res = await axios.get('https://onb0ardingapp.azurewebsites.net/api/getcurrentuser');
  // const res = await axios.get('http://localhost:5000/api/getcurrentuser');
  console.log(res);
  dispatch({ type: FETCH_USER, payload: res.data });
};


export const getTemplates = () => async dispatch => {
  const res = await axios.get('/api/templates');
  // const res = await axios.get('https://onb0ardingapp.azurewebsites.net/api/templates');
  // const res = await axios.get('http://localhost:5000/api/templates');
  // console.log(res); 
  dispatch({ type: GET_TEMPLATES, payload: res.data.templates });
};


export const getTemplatePositions = (_id) => async dispatch => {
  // // const queryString = '/api/template?template_id=' + _id;
  const res = await axios.get('/api/template?template_id=' + _id);
  // const res = await axios.get('https://onb0ardingapp.azurewebsites.net/api/template?template_id='+_id);
  // const res = await axios.get('http://localhost:5000/api/template?template_id='+_id);
  // console.log(res.data);
  dispatch({ type: GET_TEMPLATE_POSITIONS, payload: res.data });
};


export const getSets = (user_id) => async dispatch => {
  const res = await axios.get('/api/sets?employee_id='+user_id);
  // const res = await axios.get('https://onb0ardingapp.azurewebsites.net/api/sets?employee_id='+user_id);
  // const res = await axios.get('http://localhost:5000/api/sets?employee_id='+user_id);
  // console.log(res);
  dispatch({ type: GET_SETS, payload: res.data.sets });
};


export const getSet = (set_id) => async dispatch => {
  // console.log("getSet");
  const res = await axios.get('/api/tasklist/'+set_id);
  // const res = await axios.get('https://onb0ardingapp.azurewebsites.net/api/tasklist/'+set_id);
  // const res = await axios.get('http://localhost:5000/api/tasklist/'+set_id);
  // console.log(res);
  dispatch({ type: GET_SET, payload: res.data});
};


export const getAllUsers = () => async dispatch => {
  const res = await axios.get('/api/users');
  // const res = await axios.get('https://onb0ardingapp.azurewebsites.net/api/users');
  // const res = await axios.get('http://localhost:5000/api/users');
  // console.log(res.data);
  dispatch({ type: GET_ALL_USERS, payload: res.data });
};


export const getUserDetails = (user_id) => async dispatch => {
  const res = await axios.get('/api/user/'+user_id);
  // const res = await axios.get('https://onb0ardingapp.azurewebsites.net/api/user/'+user_id);
  // const res = await axios.get('http://localhost:5000/api/user/'+user_id);
  // console.log(res);
  dispatch({ type: GET_USER_DETAILS, payload: res.data });
};


export const getManagerDetails = (user_id) => async dispatch => {
  const res = await axios.get('/api/user/'+user_id);
  // const res = await axios.get('https://onb0ardingapp.azurewebsites.net/api/user/'+user_id);
  // const res = await axios.get('http://localhost:5000/api/user/'+user_id);
  dispatch({ type: GET_MANAGER_DETAILS, payload: res.data });
};


export const getBuddyDetails = (user_id) => async dispatch => {
  const res = await axios.get('/api/user/'+user_id);
  // const res = await axios.get('https://onb0ardingapp.azurewebsites.net/api/user/'+user_id);
  // const res = await axios.get('http://localhost:5000/api/user/'+user_id);
  dispatch({ type: GET_BUDDY_DETAILS, payload: res.data });
};


export const getInstructorDetails = (user_id) => async dispatch => {
  const res = await axios.get('/api/user/'+user_id);
  // const res = await axios.get('https://onb0ardingapp.azurewebsites.net/api/user/'+user_id);
  // const res = await axios.get('http://localhost:5000/api/user/'+user_id);
  // console.log(res);
  dispatch({ type: GET_INSTRUCTOR_DETAILS, payload: res.data });
};


export const getAllTasks = () => async dispatch => {
  // console.log("getAllTasks");
  const res = await axios.get('/api/tasks');
  // const res = await axios.get('https://onb0ardingapp.azurewebsites.net/api/tasks');
  // const res = await axios.get('http://localhost:5000/api/tasks');
  // console.log(res);
  dispatch({ type: GET_ALL_TASKS, payload: res.data});
};


export const getTask = (_id) => async dispatch => {
  // console.log("getTasks");
  const res = await axios.get('/api/task?task_id='+_id);
  // const res = await axios.get('https://onb0ardingapp.azurewebsites.net/api/task?task_id='+_id);
  // const res = await axios.get('http://localhost:5000/api/task?task_id='+_id);
  // console.log(res);
  dispatch({ type: GET_TASK, payload: res.data});
};

//axios.get('/api/sets?employee_id='+user_id);
export const getUnallocatedTasks = (allocated_task_ids) => async dispatch => {
  const res = await axios.get('/api/unallocatedtasks?allocated_task_ids='+allocated_task_ids);
  // const res = await axios.get('https://onb0ardingapp.azurewebsites.net/api/unallocatedtasks?allocated_task_ids='+allocated_task_ids);
  // const res = await axios.get('http://localhost:5000/api/unallocatedtasks?allocated_task_ids='+allocated_task_ids);
  // console.log(res);
  dispatch({ type: GET_UNALLOCATED_TASKS, payload: res.data})
}

// #endregion


// AXIOS PUT
// #region
export const editTask = (task) => async dispatch => {
  // console.log();
  const res = await axios.put("/api/task", task);
  // const res = await axios.put("https://onb0ardingapp.azurewebsites.net/api/task", task);
  // const res = await axios.put("http://localhost:5000/api/task", task);
  // console.log(res);
  dispatch({type: EDIT_TASK, payload: res.data})
}

export const changeSetTask = (setTask) => async dispatch => {
  // console.log("changeSetTask");
  const res = await axios.put('/api/usertask',setTask);
  // const res = await axios.put('https://onb0ardingapp.azurewebsites.net/api/usertask',setTask);
  // const res = await axios.put('http://localhost:5000/api/usertask',setTask);
  // console.log(res);
  dispatch({type: CHANGE_SET_TASK, payload: res.data})
};


// #endregion


// AXIOS POST
// #region
export const postNewTask = (task) => async dispatch => {
  const res = await axios.post("/api/task", task);
  // const res = await axios.post("https://onb0ardingapp.azurewebsites.net/api/task", task);
  // const res = await axios.post("http://localhost:5000/api/task", task);
  // console.log(res);
  dispatch({type: POST_NEW_TASK, payload:res.data})
};

export const postNewSet = (set) => async dispatch => {
  const res = await axios.post("/api/set", set);
  // const res = await axios.post("https://onb0ardingapp.azurewebsites.net/api/set", set);
  // const res = await axios.post("http://localhost:5000/api/set", set);
  console.log(res);
  dispatch({type: POST_NEW_SET, payload:res.data})
}

export const postNewSequence = (set_id) => async dispatch => {
  const res = await axios.post("/api/addsequence/"+set_id);
  // const res = await axios.post("https://onb0ardingapp.azurewebsites.net/api/addsequence/"+set_id);
  // const res = await axios.post("http://localhost:5000/api/addsequence/"+set_id);
  // console.log(res);
  dispatch({type: POST_NEW_SEQUENCE, payload:res.data});
}

export const postNewTemplate = (template) => async dispatch => {
  const res = await axios.post("/api/template", template);
  // const res = await axios.post("https://onb0ardingapp.azurewebsites.net/api/template", template);
  // const res = await axios.post("http://localhost:5000/api/template", template);
  // console.log(res);
  dispatch({type: POST_NEW_TEMPLATE, payload:res.data})
}
// #endregion
