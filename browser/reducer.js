import { combineReducers } from 'redux';
import LoginReducer from './Login/LoginReducer';
import HomeReducer from "./Home/HomeReducer";

const rootReducer = combineReducers({
  auth: LoginReducer,
  home: HomeReducer,
});

export default rootReducer;
