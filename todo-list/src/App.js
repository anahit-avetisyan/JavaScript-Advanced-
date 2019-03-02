import React, { Component } from 'react';
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
    );
  }
}

export default App;
