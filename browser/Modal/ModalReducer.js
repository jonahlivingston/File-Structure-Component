import data from './data';
import { TOGGLE, INDEX, SELECT } from './ModalActionCreators';

//JSON.Parse(JSON.stringify) is an efficient way to deeply clone objects
//see my notes in email for alternate faster approaches if optimization is later needed
const reducer = (state = {files:data,selected:null}, action) => {
    switch (action.type) {
        case SELECT:
            state.selected = action.index;
            return JSON.parse(JSON.stringify(state));
        case TOGGLE:
            state.files = action.postToggleState;
            return JSON.parse(JSON.stringify(state));
        case INDEX:
            state.files = action.postIndexState;
            return JSON.parse(JSON.stringify(state));
        default:
            return state;
  }
};

export default reducer;





