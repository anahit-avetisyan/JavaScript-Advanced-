import React, { Component } from 'react';
import reducer from "../modules/reducer";
import {changeText, incrementNumber, decrementNumber,changeSurname} from '../modules/action';
import {createStore, applyMiddleware  } from 'redux';
import thunk  from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));

 class ReduxEx extends Component{
    constructor(props){
        super(props);
        this.state = {
           surname:store.getState().changeSurname,
            changeName:store.getState().changeName,
            counter:store.getState().counter,
        };
        store.subscribe(() => this.setState({changeName: store.getState().changeName}));
        store.subscribe(()=>this.setState({counter:store.getState().counter}));
        store.subscribe(() =>this.setState({surname:store.getState().changeSurname}))
    }
    changeText = () => {
         
        store.dispatch(changeText("Mamikonyan"))}
    
    changeNumber = () => {
        store.dispatch(incrementNumber(5));
        store.dispatch(decrementNumber());
        store.dispatch(changeSurname("Avetisyan","Anahit"))

    }
    render(){
       const state = store.getState();
       console.log(state, "state", store, "store", store.getState(), "get state")
        return(
           <div>
               <p>{this.state.counter}</p>
                <p>{this.state.changeName}</p>
                <p>{this.state.surname}</p>
                <button onClick={this.changeNumber}>Change Number</button>
                <button onClick={this.changeText}>Change text</button>
           </div>
        );
    }
}
export default ReduxEx;
 


 
 