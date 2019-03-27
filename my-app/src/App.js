import React, { Component } from 'react';
import ReduxEx from './component/reduxEx';
// import Cycle from './component/lifecycle';
 

class App extends Component {
  render() {
    return (
      <div className="App">
         {/* <Cycle/> */}
         <ReduxEx/>
      </div>
    );
  }
}

export default App;
