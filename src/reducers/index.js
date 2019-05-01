// src/reducers/index.js
import {combineReducers} from 'redux';
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



export default combineReducers({
  auth: authReducer,
  templates: templateReducer,
  currentTemplate: currentTemplateReducer,
  sets: setsReducer,
  set: getSetReducer,
  users: allUsersReducer,
  user: userDetailsReducer,
  manager: managerDetailsReducer,
  buddy: buddyDetailsReducer,
  instructor: instructorDetailsReducer,
  tasks: getAllTasksReducer
  });