import React,{Component} from 'react';


class Footer extends Component{
    
    render(){
        return(
            <form>
            <input type="checkbox"/><span>Busy</span> 
            <input type="checkbox"/><span>Available </span>
            <input type="checkbox"/><span>Started </span> 
             </form>
        )
    }
}
  export default Footer;