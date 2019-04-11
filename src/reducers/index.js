// src/reducers/index.js
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import templateReducer from './templateReducer';
import currentTemplateReducer from './currentTemplateReducer';
import setsReducer from './setsReducer';
import currentSetTasklistReducer from './currentSetTasklistReducer';

export default combineReducers({
  auth: authReducer,
  templates: templateReducer,
  currentTemplate: currentTemplateReducer,
  sets: setsReducer,
  tasks: currentSetTasklistReducer
  });