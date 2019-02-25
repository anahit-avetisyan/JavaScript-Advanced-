import React, { Component } from 'react';
 import Header from "./components/header";
 import Main from "./components/main";
 import Footer from "./components/footer";
 import MainSignIn from "./components/mainSignIn";


class App extends Component {
  render() {
    return (
        <form id="form">
        <Header/>
        <MainSignIn/>
       <Main/>
       <Footer/>
       </form>
    );
  }
}

export default App;
