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
<<<<<<< HEAD
            <input type="checkbox"/><span>Busy</span> 
            <input type="checkbox"/><span>Available </span>
            <input type="checkbox"/><span>Started </span> 
=======
            <input   defaultChecked={this.state.checked} type="checkbox"/><span>Busy</span> 
            <input  defaultChecked={this.state.checked}  type="checkbox"/><span>Available </span>
            <input  defaultChecked={this.state.checked}  type="checkbox"/><span>Started </span> 
>>>>>>> 415c6c76ddb2f36096e9be71b157524d85c7c5ae
            <button onClick={this.myFunction} >Reload</button>
             </form>
        )
    }
}
  export default Footer;