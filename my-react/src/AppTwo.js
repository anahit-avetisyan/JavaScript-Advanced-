 
import React, { Component } from 'react';
import './App.css';
 

class AppTwo extends Component {
    render(){
        return(
            <form>
                <div className="forlabel">
                <label className="account">Create an Account</label>
            </div>
            <div className="inputtypes">
    
    <input type="text" placeholder="Name" id="loginName"/>
 
 
    <input type="tel" className="input-res" placeholder="Phone number" id="loginPhoneNumber"/>
 
 
    <input type="email" placeholder="Email" id= "loginEmail" size="50"/>
 
 
    <input type="password" placeholder="Password" id="loginPassword"/>
 
</div>
<div className="typecheckbox">
<input type="checkbox" required   ></input>
<label>
  I agree to the  Terms and Conditions and   Privacy Policy 

</label>
</div>
            </form>
        )
    }
}
export default AppTwo  