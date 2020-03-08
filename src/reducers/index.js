// src/reducers/index.js
import {combineReducers} from 'redux';
// import userLoginFeReducer from './userLoginFeReducer'; //Front end
import authReducer from './authReducer';
import templateReducer from './templateReducer';
import currentTemplateReducer from './currentTemplateReducer';
import setsReducer from './setsReducer';
import getSetReducer from './getSetReducer';
import allUsersReducer from './allUsersReducer';
import userDetailsReducer from './userDetailsReducer';
import managerDetailsReducer from './managerDetailsReducer';
import buddyDetailsReducer from './buddyDetailsReducer';
import instructorDetailsReducer from './instructorDetailsReducer';
import getAllTasksReducer from './getAllTasksReducer';
import getTaskReducer from './getTaskReducer';
import postNewSetReducer from './postNewSetReducer';
import postNewSequenceReducer from './postNewSequenceReducer'
import getUnallocatedTasksReducer from './getUnallocatedTasksReducer'


export default combineReducers({
  auth: authReducer,
  // frontEndAuth: userLoginFeReducer,  // Front end
  templates: templateReducer,
  currentTemplate: currentTemplateReducer,
  sets: setsReducer,
  set: getSetReducer,
  users: allUsersReducer,
  user: userDetailsReducer,
  manager: managerDetailsReducer,
  buddy: buddyDetailsReducer,
  instructor: instructorDetailsReducer,
  tasks: getAllTasksReducer,
  task: getTaskReducer,
  new_set: postNewSetReducer,
  new_sequence: postNewSequenceReducer,
  unallocated_tasks: getUnallocatedTasksReducer
  });