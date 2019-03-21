 
import React,{Component,Fragment} from 'react';
import {FaTimes} from 'react-icons/fa'
 
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
                <FaTimes className="FaTimes" onClick={this.closed}/> 
                <div className="DivForForms">{this.props.forms}</div>
                </div>
            </div>}
            </Fragment> 
        )
    }
}
export default PopUp;