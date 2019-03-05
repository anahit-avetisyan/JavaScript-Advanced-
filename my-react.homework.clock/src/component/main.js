import React,{Component} from "react";
import Clock from '../images/clo.png'


class Main extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="divForImg">
            <img  src={Clock} alt ="Clock"/> 
            <div  className= "divForPointer">{this.state.degree}
            </div>
            </div>
           
            </React.Fragment>
        )
    }
}
export default Main;