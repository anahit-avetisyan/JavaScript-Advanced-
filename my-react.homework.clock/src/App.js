import React, { Component } from 'react';
import Clock from './images/clo.png';
// import Header from './component/header'
//  import Main from './component/main'
class App extends Component {
  
    state = {value: '12',
  transform:"",
};

   
 handleChange=(event)=> {
  this.setState({value: event.target.value});
}
 handleSubmit = (event)=>{
  this.setState({value: event.target.value})
if(this.state.value>12||this.state.value<1){
  console.log("please input right number")
}
//  for(let i=1;i<this.state.value;i++){
//    this.state.clock +=  30
//  }
//  console.log(this.state.clock)
if(this.state.value==1){
  return this.state.clock="rotate(30deg)"
}
if(this.state.value==2 ){
  return this.state.clock="rotate(60deg)"
}
if(this.state.value==3 ){
  return this.state.clock="rotate(90deg)"
}
if(this.state.value==4 ){
  return this.state.clock="rotate(120deg)"
}
if(this.state.value==5 ){
  return this.state.clock="rotate(150deg)"
}
if(this.state.value==6 ){
  return this.state.clock="rotate(180deg)"
}
if(this.state.value==7){
  return this.state.clock="rotate(210deg)"
}
if(this.state.value==8){
  return this.state.clock="rotate(240deg)"
}
if(this.state.value==9){
  return this.state.clock="rotate(270deg)"
}
if(this.state.value==10){
  return this.state.clock="rotate(300deg)"
}
if(this.state.value==11){
  return this.state.clock="rotate(330deg)"
}
if(this.state.value==12){
  return this.state.clock="rotate(360deg)"
}
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
