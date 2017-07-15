import { combineReducers } from 'redux';
import ModalReducer from './Modal/ModalReducer';

const rootReducer = combineReducers({
  modal: ModalReducer,
});

export default rootReducer;
