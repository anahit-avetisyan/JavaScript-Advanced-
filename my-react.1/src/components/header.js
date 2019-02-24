import React,{Component} from "react";

class Header extends Component {
    render(){
        return(
            <header class="flex-container">
            <div class="logo">&#966;</div>
            <nav class="topnav" id="myTopnav">
                <ul>
                    <li><a href="#">Famo.us University</a></li>
                    <li><a href="#">Demos</a></li>
                    <li><a href="#">Famo.us/Angular</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Blog</a></li>
                   <li><a href="javascript:void(0);" class="icon" onclick="myFunction()">
                            <i className="fa fa-bars"></i>
                          </a>
                        </li> 
                </ul>
            </nav>
            <div class="download">
                <a href="#">Download</a>
            </div>
        </header>

        );
    }

}
export default Header;