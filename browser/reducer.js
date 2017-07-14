import { combineReducers } from 'redux';
import LoginReducer from './Login/LoginReducer';
import ModalReducer from './Modal/ModalReducer';

const rootReducer = combineReducers({
  auth: LoginReducer,
  modal: ModalReducer,
});

export default rootReducer;
