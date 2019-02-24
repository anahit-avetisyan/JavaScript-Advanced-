import React, {Component} from "react";

class Footer extends Component {
    render(){
        return(
            <React.Fragment>
            <div id="divForCheckbox">
                <input id="typeCheckbox" type="checkbox"/>
                <label for="typeCheckbox" class="labelForCheckbox">
                    I agree all statements in <a href="#">Terms of service</a>
                </label>
            </div>
            <button id="buttonOne" type="button" onclick="myFunction()">CREAT ACCOUNT</button>
            <button id="buttonTwo" type="button" onclick="myFunctionOne()">LOG IN</button>
            <p id="footer">Have already an account? <b><a href="#" target = "_blank"  > Login here </a> </b></p>
            </React.Fragment>  

        )
    }
}
export default Footer