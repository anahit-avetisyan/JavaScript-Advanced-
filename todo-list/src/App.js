import React, { Component } from 'react';
<<<<<<< HEAD
// import List from './components/main';
// import Footer from './components/footer';
// import data from './components/json';
import Cubic from './components/squeir'

class App extends Component {
   
//     state = {
//       data:[]
//     }
  
//   myFunctionOne = () =>{
//    fetch ("http://rest.learncode.academy/api/learncode/friends", {
//      method: "POST",
//      headers: {
//     "Content-Type": "application/json",
// },
//   body: JSON.stringify(data)
// })
// .then(response => response.json())  
// .then((data =>{
//   this.setState({
//     data: [data]})}))
// }

  render() {
  // this.myFunctionOne()
    return (
      <div className="App">
      <Cubic/>
      </div>
     
      // <React.Fragment>
      //  <List />
      //  <div className="App">
      //  {
      //     this.state.data.map((dynamicData, Key) => {
      //       let keys = Object.keys(dynamicData);
      //       // let d = dynamicData;
      //       console.log(keys)
      //       return keys.map((index, data) => {
      //         return (
      //           <div key={index}>
      //             <div >{dynamicData[data].GameNumber}</div>
      //             <div >{dynamicData[data].Status}</div>
      //             <div >{dynamicData[data].Player}</div>
      //             <div >{dynamicData[data].Player2}</div>
      //             <div>{dynamicData[data].Round}</div>
      //             <div >{dynamicData[data].Amount}</div>
      //             <div>{dynamicData[data].Time}</div>
      //             <div >{dynamicData[data].Action}</div>
      //           </div>
      //         );
      //       });
      //     })
          
      //   }
      // </div>
      // <Footer/>

      // </React.Fragment>
=======
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
>>>>>>> 415c6c76ddb2f36096e9be71b157524d85c7c5ae
    );
  }
}

export default App;
