import React,{Component} from "react";

class Main extends Component {
    render(){
        return(
            <div id="signUp">
                <span id="allelem"></span>
                <input   type="text" placeholder="Name" id="loginName" />
                <input   type="text" placeholder="User Name" id="loginuserName"/>
                <input   type="mail" placeholder="Your Email" id="loginEmail" />
                <span id="spanForMail"></span>
                <input   type="password" placeholder="Password" id="loginPassword"/>
                <span id="span"></span>
                <input   type="password" placeholder="Repeat your password" id= "RepeatPassword"/>
                <span id = "spanOne"></span>
            </div>

        )
    }
}
export default Main