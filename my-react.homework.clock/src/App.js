import React, { Component } from 'react';
// import Clock from './images/clo.png';
// import Header from './component/header'
//  import Main from './component/main'
import Clock from './component/showClock'
class App extends Component {
state ={
  clicked:false
}
deleteComponent=()=>{
  this.setState({clicked:true})
}
//   state = { text:" ",
//   number:0,
// class:"Green"
//   }
  
//    changeText=(e)=>{
//     this.setState({text: e.target.value});
      
//    }
//    changeNumber=(e)=>{
//     this.setState({number: e.target.value});
    
//    }
//    showH1=()=>{
//      this.setState({class:"Yellow"})
//      console.log(this.h1)
//      console.log(this.h2)
//      console.log(this.h1)
//    }
//     state = {value: '12',
 
// };


//  handleChange=(event)=> {
  
//   this.setState({value: event.target.value});
// }
//  handleSubmit = (event) => {
//   this.setState({transform:0})
//   this.setState({value: event.target.value})
// if(this.state.value>12||this.state.value<1){
//   alert("please input right number")
// }
 
//  for(let i=0;i<this.state.value;i++){
//    this.state.transform +=  30
//  }
//    this.state.clock ="rotate(" + (this.state.transform + "deg)" )
 

//  }
   
  render() {
  
    return (
      <div className="App">
       {this.state.clicked? null:<Clock/>}
      <button onClick={this.deleteComponent}> click</button>
      {/* <input type="text" ref={el => this.text=el}  onChange={this.changeText }   name = "text" />
      <p>{this.state.text}</p>
      <input type="number" ref={el => this.number=el} onChange={this.changeNumber }    name = "number" />
      <p>{this.state.number}</p>
      <button onClick={this.showH1} type="button">Click</button>
      <h1  className={`color${this.state.class}`} ref={el=>this.h1=el}>Hello</h1>
      <h1 ref={el=>this.h1=el}>AAAAAA</h1>
      <h2 ref={el=>this.h2=el}>Hello</h2> */}

      {/* <form  >
        <input type="number"  onChange={this.handleChange } value={this.state.value} />
        <button type="button" onClick={this.handleSubmit }>Click</button>
      </form>
          <div className="divForImg">
            <img src={Clock} alt ="Clock"/> 
          <div  style ={{transform:this.state.clock}} className= "divForPointer"> </div>
            </div> */}
      </div>
    );
  }
}
 
export default App;
