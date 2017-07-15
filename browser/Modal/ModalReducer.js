import data from './data';
import { TOGGLE, INDEX, SELECT } from './ModalActionCreators';

//JSON.Parse(JSON.stringify) is an efficient way to deeply clone objects
//see my notes in email for alternate faster approaches if optimization is later needed
const reducer = (state = {files:data,selected:null}, action) => {
    switch (action.type) {
        case SELECT:
            state.selected = action.index;
            var newState = JSON.parse(JSON.stringify(state));
            return newState;
        case TOGGLE:
            state.files = action.postToggleState;
            var newState = JSON.parse(JSON.stringify(state));
            return newState;
        case INDEX:
            state.files = action.postIndexState;
            var newState = JSON.parse(JSON.stringify(state));
            return newState;
        default:
            return state;
  }
};

export default reducer;





