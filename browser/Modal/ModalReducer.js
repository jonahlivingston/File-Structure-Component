import data from './data';
import {TOGGLE} from "./ModalActionCreators";


const reducer = (state = data, action) => {
    console.log("gottoreducer",action.name)
  switch (action.type) {
    case TOGGLE:
    var clonedState = JSON.parse(JSON.stringify(state))
     return findAndMakeOpen(action.name,clonedState)
    default:
      return state;
  }
};

export default reducer;



function findAndMakeOpen(name,state){
    var arrToSearch = [state];
    while(arrToSearch.length){
        var examined = arrToSearch.shift();
        if (examined.name===name){
            examined.open = !examined.open;
            return state
        }
        else{
            if (examined.children){
                examined.children.forEach((file) => {
                arrToSearch.push(file);
            });
        }
        }
    };
}