import React, { Component } from 'react';
import reducer from "../modules/reducer";
import {changeText} from '../modules/action';
import { connect } from 'react-redux'

 
const mapStateToProps = (state /*, ownProps*/) => {
    return {
      counter: state.counter
    }
  }
  const mapDispatchToProps = { increment, decrement, reset }
 class ReduxEx extends Component{
  
      
    render(){
        
        return(
           <div>
               <input type="text"/>
               <input type = "text" />
                <button onClick={this.sentData}>Change text</button>
           </div>
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReduxEx)
 


 
 