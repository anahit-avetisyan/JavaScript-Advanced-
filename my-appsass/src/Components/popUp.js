 
import React,{Component,Fragment} from 'react';
import {FaTimes} from 'react-icons/fa'
import Li from './LI'
 
class PopUp extends Component{
state={
    clicked:false
}
closed=()=>{
    this.setState({clicked:true})
}
    render(){
        return(
            <Fragment>
            {this.state.clicked? null:<div className='popup'>
                <div className='popup_inner'>
                <li>
                {this.props.id + ' -> ' + this.props.text}
                </li>
                <FaTimes className="FaTimes" onClick={this.closed}/> 
                <div className="DivForForms">{this.props.text}</div>
                </div>
            </div>}
            </Fragment> 
        )
    }
}
export default PopUp;