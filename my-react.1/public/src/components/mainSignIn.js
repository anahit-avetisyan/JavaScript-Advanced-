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
function signIn() {
    document.getElementById("signIn").style.display = "flex";
    document.getElementById("signUpp").style.border= "none";
    document.getElementById("signInn").style.borderBottom = "2px solid #212F41";
    document.getElementById("signUp").style.display = "none";
    document.getElementById("divForCheckbox").style.display = "none";
    document.getElementById("buttonTwo").style.display = "block";
    document.getElementById("buttonOne").style.display = "none";
    return document.getElementById("footer").style.display = "none";
}
export default MainSignIn;
