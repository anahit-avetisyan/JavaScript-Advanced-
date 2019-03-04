import React,{Component} from 'react';
import Clock from '../images/clo.png';
class Header extends Component {
    
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