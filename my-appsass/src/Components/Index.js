 
import React, { Component,Fragment } from 'react';
import {FaTimes} from 'react-icons/fa'
import SignIn from './signIn';
import SignUp from './signUp';
import {createStore, applyMiddleware  } from 'redux';
import thunk  from 'redux-thunk';
import reducer from '../reducer/reducer' ;
import {closePopup} from '../reducer/action'
 

const store = createStore(reducer, applyMiddleware(thunk));
class PopUp extends Component {
  state={
    closePopup:true,
    state: store.getState(),
    signIn:true,
    signUp:true
  }
  changed= store.subscribe(()=>this.setState({state: store.getState()}))
  signIn=()=>{
    store.dispatch(closePopup(false))
    this.setState({signIn:false})
    this.setState({signUp:true})
  }
  closed=()=>{
    store.dispatch(closePopup(true))   
}
  signUp=()=>{
    store.dispatch(closePopup(false))
    this.setState({signIn:true})
    this.setState({signUp:false})
  }
    render(){
        const state = store.getState()
        return(
            <Fragment>
           {state.clickedPopUp? null:<div className='popup'>
                <div className='popup_inner'>
                <FaTimes className="FaTimes" onClick={this.closed}/> 
                <div className="DivForForms">
                {this.state.signIn? null:<SignIn/>}
                {this.state.signUp? null: <SignUp/>}
                </div>
                </div>
            </div>}
       <div className="divForMainButtons">
                <button onClick={this.signIn} className="mainButtonSignIn"> SIGN IN </button>
                <button onClick={this.signUp} className="mainButtonSignUP"> SIGN UP </button>
            </div>
            </Fragment> 
        )
    }
}
export default PopUp;