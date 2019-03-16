import React,{Component,Fragment} from 'react';
class Clock extends Component{
    state={
        date: new Date(),
        clicked:false
    }
    componentDidMount(){
        this.time = setInterval(()=>this.changeTime(),1000)
    }
    changeTime=()=>{
        this.setState({
            date:new Date()
        })
    }
    componentDidUpdate(previousProps,previousState){
       if(previousState.date!=this.state.date){
           console.log("jamy poxvec")
       }
    }
   
    componentWillUnmount(){
        clearInterval(this.time);
    }
    render(){
        return(
            <Fragment>
            <h1>Hello Anahit jan </h1>
           {this.state.clicked? null: <p>the tim e is....{this.state.date.toLocaleTimeString()}</p>}
           
            </Fragment>
        )
    }
}
export default Clock;