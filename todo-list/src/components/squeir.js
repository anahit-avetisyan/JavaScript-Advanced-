import React, { Component } from 'react';

class Cubic extends Component{
    state = {
        color:"yellow",
        number:0
    }
    CubicClick =()=>{
        this.setState({
            color: "green",
            number:this.state.number += 1
        })

        }
    
    render(){
        return(
            <div style={{backgroundColor: this.state.color}} className = "cubic" onClick = {this.CubicClick}>{this.state.number}</div>
        )
    }
}
export default Cubic;