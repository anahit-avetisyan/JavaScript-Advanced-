import React,{Component} from "react";


class MainSignIn extends Component{
    render(){
        return(
            <div id="signIn">
            <input   type="text" placeholder="User Name" id="loginuserNameOne"/>
            <p id="pforuser"></p>
            <input   type="password" placeholder="Password" id="loginPasswordOne"/>
            <p id="pforpass"></p>
        </div>

        );
    }
}
 
export default MainSignIn;
