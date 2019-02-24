import React, {Component} from "react";

class Footer extends Component {
    render(){
        return(
            <React.Fragment>
             <footer > 
            <ul>
                <li><a href="#">Branding</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">&copy;Famous Industries, Inc. 2014</a></li>
            </ul>
            <form action="">
                <input type="text" placeholder="Email Addres"/>
                <input type="submit" value="Get Updates"/>
            </form>
        </footer>
            </React.Fragment>  

        )
    }
}
export default Footer