import React, { Component } from 'react';
import List from './components/main';
// import Footer from './components/footer';
import data from './components/json';

class App extends Component {
    state = {
      data:[],
      checked: true,
    }
    

  myFunctionOne = () =>{
   fetch ("http://rest.learncode.academy/api/learncode/friends", {
     method: "POST",
     headers: {
    "Content-Type": "application/json",
},
  body: JSON.stringify(data)
})
.then(response => response.json())  
.then((data =>{
  this.setState({
    data: [data]})}))
}
handleCheck = () => {
    this.setState({checked: !this.state.checked});
  };
  handleCheck1= () => {
    this.setState({checked: !this.state.checked});
  };
   
myFunction=()=>{
  if(!this.state.checked)
  {this.state.data.map((dynamicData,Key)=>{
    let keys = Object.keys(dynamicData);
    keys.map((data) => {
      if(dynamicData[data].Status=="Busy" ){
     delete dynamicData[data]
      }

    });
  });
}
}
myFunction2= () => {
  if(!this.state.checked)
  {this.state.data.map((dynamicData,Key)=>{
    let keys = Object.keys(dynamicData);
    keys.map((data) => {
      if(dynamicData[data].Status=="Available" ){
     delete dynamicData[data]
      }

    });
  });
}
}

  
  render() { 
  this.myFunction()
  this.myFunction2()
  this.myFunctionOne()
    return (
   
      <React.Fragment>
       <List />
       <div className="App">
       {
          this.state.data.map((dynamicData, Key) => {
            let keys = Object.keys(dynamicData);
            // let d = dynamicData;
            return keys.map((index,data) => {
              return (
                <div key={index}>
                  <div>{dynamicData[data].GameNumber}</div>
                  <div>{dynamicData[data].Status}</div>
                  <div>{dynamicData[data].Player}</div>
                  <div>{dynamicData[data].Player2}</div>
                  <div>{dynamicData[data].Round}</div>
                  <div>{dynamicData[data].Amount}</div>
                  <div>{dynamicData[data].Time}</div>
                  <div>{dynamicData[data].Action}</div>
                </div>
              );
            });
          })
          
        }
      </div><form>
            <input  onChange={this.handleCheck}  defaultChecked={this.state.checked} type="checkbox"/><span>Busy</span> 
            <input onChange={this.handleCheck1} defaultChecked={this.state.checked} onClick={this.handleClick}  type="checkbox"/><span>Available </span>
            <input onChange={this.handleCheck2} defaultChecked={this.state.checked}  type="checkbox"/><span>Started </span> 
            <button  type = "button">Reload</button>
             </form>
      {/* <Footer/> */}
      </React.Fragment>
    );
  }
}

export default App;
