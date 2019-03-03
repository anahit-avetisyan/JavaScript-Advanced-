import React,{Component} from 'react';
import Clock from '../images/clo.png';
class Header extends Component {
    state={
       value:[],
        clock:""
    }
    handleChange=()=>{
        this.setState({
         
        })
        if(this.state.value===10){
            console.log("aaaaaaa")
        }
        }
        
    
   
    render(){

        return (
            <React.Fragment>
            <form>
                <input type="text" onChange={this.handleChange} value={this.state.value}/>
                <button type="button" onClick={this.handleChange}>Clock</button>
            </form>
            <div className="divForImg">
            <img src={Clock} alt ="Clock"/> 
            <div  className= "divForPointer">{this.state.clock}</div>
            </div>
            </React.Fragment>

        )
    }
}
export default Header;