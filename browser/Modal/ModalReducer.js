import data from './data';
import { TOGGLE, INDEX, SELECT } from './ModalActionCreators';
import { breadthFirstToggle, breadthFirstIndex } from '../utils';


//JSON.Parse(JSON.stringify) is an efficient way to deeply clone objects
//see my notes in email for alternate faster approaches if optimization is later needed
const reducer = (state = {files:data,selected:null}, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case SELECT:
            newState.selected = action.index;
            return newState;
        case TOGGLE:
            newState.files = breadthFirstToggle(action.index,newState.files);
            return newState;
        case INDEX:
            newState.files = breadthFirstIndex(newState.files);
            return newState;
        default:
            return state;
  }
};

export default reducer;





