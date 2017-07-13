import { INCREMENT } from "./HomeActionCreators";



const reducer = (state=1, action) => {
    console.log("here?",action.type)
    switch(action.type){
        case INCREMENT:
            console.log("hitt")
            return state + 1
        default:
            return state
    }
};

export default reducer;

