import React,{Component,Fragment} from 'react';


class Increment extends Component{
state={
    increment:0,
    clicked:false
}

componentDidMount(){
 this.number=setInterval(()=>this.changeNumber(),500)
}
changeNumber=()=>{
    this.setState({increment:this.state.increment+1})
}
componentDidUpdate(previousProps,previousState){
 if(previousState.increment===14){
     console.log("Anahit 13  is your favourite number")
 }
}
 
componentWillUnmount=()=>{
    clearInterval(this.number)
}
 delete=()=>{
     this.setState({clicked:true})
 }
 componentWillUnmount=()=>{
    clearInterval(this.number)
}
 return=()=>{
    this.setState({clicked:false}) 
 }
    render(){
        return(
            <Fragment>
                <h3>Hi EveryOne</h3>
                {this.state.clicked? null: <h5>Number is...... {this.state.increment}</h5>}
                <button onClick={this.delete}>CLICK ME</button>
                <button onClick={this.return}>CLICK ME</button>
            </Fragment>
        )
    }
}
export default Increment;