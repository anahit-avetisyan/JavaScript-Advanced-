  import React, { Component } from 'react';
  import Header from "./components/header";
  import FirstSection from './components/firstSection';
  import SecondSection from './components/secondSection';
  import Footer from './components/footer';
  import './App.css';
  
class App extends Component {
  render() {
    return (
        <div >
        <Header/>
        <FirstSection/>
        <SecondSection/>
        <Footer/>
       </div>
    );
  }
}
export default App;
