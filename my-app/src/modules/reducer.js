import { combineReducers} from 'redux';

function valueInput(state =0, action) {
        switch (action.type){
            case "CHANGE_INPUT" :
            return action.inputValue
            default :
            return state 
        }
    };
    
    
     const reducer = combineReducers({valueInput});
      
      export default reducer;