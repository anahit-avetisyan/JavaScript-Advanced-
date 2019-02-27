import React, { Component } from 'react';
// import List from './components/index';
import Footer from './components/footer';
import Data from './components/json'
class App extends Component {
  myFunction = () =>{
    console.log(Data)
    fetch ("http://rest.learncode.academy/api/learncode/friends", {
      method: "POST",
      headers: {
     "Content-Type": "application/json",
 },
   body: JSON.stringify(Data)
})
.then(response => response.json())  
 .then((response) => {
   console.table  (response);
 }) 
  }
  render() {
    
    return (
      <div className="App">
      
         {/* <List/> */}
         <Footer/>
         <button onClick={this.myFunction} ></button>
      </div>
    );
  }
}

export default App;
