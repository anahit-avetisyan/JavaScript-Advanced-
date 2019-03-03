import React, { Component } from 'react';
import Clock from './images/clo.png';
// import Header from './component/header'
//  import Main from './component/main'
class App extends Component {
  
    state = {value: '12'};

   
 handleChange=(event)=> {
  this.setState({value: event.target.value});
}
 handleSubmit = (event)=>{
  this.setState({value: event.target.value})
if(this.state.value>12||this.state.value<1){
  console.log("please input right number")
}
// if(typeof(this.state.value)=="string"){
//   console.log("please input number")
// }
 
if(this.state.value==1||this.state.value==7){
  return this.state.clock="rotate(30deg)"
}
if(this.state.value==2||this.state.value==8){
  return this.state.clock="rotate(60deg)"
}
if(this.state.value==3||this.state.value==9){
  return this.state.clock="rotate(90deg)"
}
if(this.state.value==4||this.state.value==10){
  return this.state.clock="rotate(120deg)"
}
if(this.state.value==5||this.state.value==11){
  return this.state.clock="rotate(150deg)"
}
if(this.state.value==6||this.state.value==12){
  return this.state.clock="rotate(180deg)"
}
 }

  render() {
    return (
      <div className="App">
      
      <React.Fragment>
      <form  >
         
          <input type="text"  onChange={this.handleChange } value={this.state.value} />
        
        <button type="button" onClick={this.handleSubmit }>Clock</button>
      </form>
            {/* <form>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button type="button" onClick={this.handleSubmit}>Clock</button>
            </form> */}
            <div className="divForImg">
            <img src={Clock} alt ="Clock"/> 
            <div  style ={{transform:this.state.clock}} className= "divForPointer"> </div>
            </div>
            </React.Fragment>
      </div>
    );
  }
}
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
export default App;
