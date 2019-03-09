import React,{Component} from "react";

class Main extends Component {
    signIn=()=> {
        console.log("aaa")
      }
    render(){
        return(
            <React.Fragment>
            <div className="divForSign">
                <button id="signUpp" onClick={this.signUp}>Sign Up</button>
                <button id="signInn" onClick={this.signIn}>Sign In</button>
            </div>
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
            <div id="divForCheckbox">
                <input id="typeCheckbox" type="checkbox"/>
                <label for="typeCheckbox" className="labelForCheckbox">
                    I agree all statements in <a href="#">Terms of service</a>
                </label>
            </div>
            <button id="buttonOne" type="button" onClick={this.myFunction}>CREAT ACCOUNT</button>
            <button id="buttonTwo" type="button" onClick={this.myFunctionOne}>LOG IN</button>
            <p id="footer">Have already an account? <b><a href="#" target = "_blank"  > Login here </a> </b></p>
            </React.Fragment>
        )
    }
}
export default Main