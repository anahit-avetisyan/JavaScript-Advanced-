import React, { Component } from 'react';
import List from './components/main';
import Footer from './components/footer';
import data from './components/json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }
  myFunction = () =>{
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
  render() {
  
    return (
      
     
      <React.Fragment>
       <List />
       <div className="App">
       {
          this.state.data.map((dynamicData, Key) => {
            let keys = Object.keys(dynamicData);
            // let d = dynamicData;
            console.log(keys)
            return keys.map(data => {
              return (
                <div>
                  <div key={keys}>{dynamicData[data].GameNumber}</div>
                  <div key={keys}>{dynamicData[data].Status}</div>
                  <div key={keys}>{dynamicData[data].Player}</div>
                  <div key={keys}>{dynamicData[data].Player2}</div>
                  <div key={keys}>{dynamicData[data].Round}</div>
                  <div key={keys}>{dynamicData[data].Amount}</div>
                  <div key={keys}>{dynamicData[data].Time}</div>
                  <div key={keys}>{dynamicData[data].Action}</div>
                </div>
              );
            });
          })
          
        }
      </div>
      <Footer/>
      <button onClick={this.myFunction} >Reload</button>
      </React.Fragment>
    );
  }
}

export default App;
