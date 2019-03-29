import { combineReducers} from 'redux';

function clickedPopUp (state=true,action){
    switch (action.type){
        case "CLOSED_POPUP" :
        return action.changed
        default :
        return state 
}
}
const reducer = combineReducers({clickedPopUp})
export default reducer;