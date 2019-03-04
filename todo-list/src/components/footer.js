import React,{Component} from 'react';


class Footer extends Component{
    state={
        checked: true,
    }
    myFunction=()=>{
     
            console.log("aaa")
        }
    
    render(){
        return(
            <form>
            <input   defaultChecked={this.state.checked} type="checkbox"/><span>Busy</span> 
            <input  defaultChecked={this.state.checked}  type="checkbox"/><span>Available </span>
            <input  defaultChecked={this.state.checked}  type="checkbox"/><span>Started </span> 
            <button onClick={this.myFunction} >Reload</button>
             </form>
        )
    }
}
  export default Footer;