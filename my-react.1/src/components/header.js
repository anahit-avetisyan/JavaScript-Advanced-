import React,{Component} from "react";
import { Icon } from 'react-icons-kit';
import {menu} from 'react-icons-kit/icomoon/menu'
class Header extends Component {
    // handleEvent = event=>{
    //     style= 
    render(){
        return(
            <header className="flex-container">
            <div className="logo">&#966;</div>
            <nav className="topnav" id="myTopnav">
                <ul>
                    <li><a href="#">Famo.us University</a></li>
                    <li><a href="#">Demos</a></li>
                    <li><a href="#">Famo.us/Angular</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Blog</a></li>
                   <li><a href="javascript:void(0);" className="icon" >
                            <Icon icon={menu} className="fa fa-bars" onClick={this.handleEvent}/>
                          </a>
                        </li> 
                </ul>
            </nav>
            <div className="download">
                <a href="#">Download</a>
            </div>
        </header>

        );
    }

}
 

export default Header;