// src/reducers/index.js
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import templateReducer from './templateReducer';
import currentTemplateReducer from './currentTemplateReducer';
import setsReducer from './setsReducer';
import getSetReducer from './getSetReducer';
import userDetailsReducer from './userDetailsReducer';
import managerDetailsReducer from './managerDetailsReducer';
import buddyDetailsReducer from './buddyDetailsReducer';
import instructorDetailsReducer from './instructorDetailsReducer';



export default combineReducers({
  auth: authReducer,
  templates: templateReducer,
  currentTemplate: currentTemplateReducer,
  sets: setsReducer,
  set: getSetReducer,
  user: userDetailsReducer,
  manager: managerDetailsReducer,
  buddy: buddyDetailsReducer,
  instructor: instructorDetailsReducer
  });