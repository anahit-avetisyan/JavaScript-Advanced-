import React,{Component} from "react";


class Header extends Component {
    
    render(){
        return(
            <div className="divForSign">
                <div id="signUpp" onClick={this.signUp}>Sign Up</div>
                <div id="signInn" onClick={this.signIn}>Sign In</div>
            </div>
        )
    }

}
export default Header