import React,{Component} from "react";


class Header extends Component {
    render(){
        return(
            <div className="divForSign">
                <div id="signUpp" onclick="signUp()">Sign Up</div>
                <div id="signInn" onclick="signIn()">Sign In</div>
            </div>
        )
    }

}
export default Header