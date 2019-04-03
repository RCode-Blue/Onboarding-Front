// src/reducers/index.js
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import templateReducer from './templateReducer';
import currentTemplateReducer from './currentTemplateReducer';

export default combineReducers({
  auth: authReducer,
  templates: templateReducer,
  currentTemplate: currentTemplateReducer
  });