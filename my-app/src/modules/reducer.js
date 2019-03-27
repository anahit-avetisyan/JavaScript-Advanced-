import { combineReducers} from 'redux';

function counter(state =0, action) {
        switch (action.type){
            case "INCREMENT" :
            return state + action.number
            case "DECREMENT" : 
            return state -1
            default :
            return state 
        }
    };
    
    function changeName(state = "Vardan", action) {
        switch (action.type){
            case "CHANGE_TEXT" :
            return action.text
            default :
            return state 
        }
    }
    function changeSurname(state="Melikyan",action){
        switch (action.type) {
            case "Change_Surname":
        return  action.surName + " " + action.name
            default:
            return state
        }
    }
     const reducer = combineReducers({counter, changeName,changeSurname});
      
      export default reducer;