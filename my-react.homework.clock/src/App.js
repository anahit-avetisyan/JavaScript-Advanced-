import React, { Component } from 'react';
import Clock from './images/clo.png';
// import Header from './component/header'
//  import Main from './component/main'
class App extends Component {
  
    state = {value: '12',
  transform:0,
  clock: ''
};


 handleChange=(event)=> {
   this.setState({transform:0})
  this.setState({value: event.target.value});
}
 handleSubmit = (event) => {
  this.setState({value: event.target.value})
if(this.state.value>12||this.state.value<1){
  alert("please input right number")
}
 
 for(let i=0;i<this.state.value;i++){
   this.state.transform +=  30
 }
   this.state.clock ="rotate(" + (this.state.transform + "deg)" )
   console.log(this.state.clock)

 }
 
  render() {
  
    return (
      <div className="App">
      <form  >
        <input type="number"  onChange={this.handleChange } value={this.state.value} />
        <button type="button" onClick={this.handleSubmit }>Click</button>
      </form>
          <div className="divForImg">
            <img src={Clock} alt ="Clock"/> 
          <div  style ={{transform:this.state.clock}} className= "divForPointer"> </div>
            </div>
      </div>
    );
  }
}
 
export default App;
