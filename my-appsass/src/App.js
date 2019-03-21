import React, { Component } from 'react';
import {FaTimes} from 'react-icons/fa'
// import PopUp from'./components/popUp';
import SignIn from './Components/signIn';
import SignUp from './Components/signUp';
 

class App extends Component {
  state={
    clicked:true,
    signIn:true,
    signUp:true
  }
  signIn=()=>{
    this.setState({clicked:false})
    this.setState({signIn:false})
    this.setState({signUp:true})
 
  }
  closed=()=>{
    this.setState({clicked:true})
    
}
  signUp=()=>{
    this.setState({clicked:false})
    this.setState({signIn:true})
    this.setState({signUp:false})
  }
  render() {
    return (
      <div className="App">
        {this.state.clicked? null:<div className='popup'>
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
      </div>
    );
  }
}

export default App;