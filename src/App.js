import React, { Component } from 'react';
import Footer from './Components/Footer/Footer';
import AllPillars from './Components/AllPillars/AllPillars';


import 'tachyons';
import './App.css';
class App extends Component {

  render() {
    return (
      <div className="App"> 
      {/*<Navigation />*/}

      <div className="content-wrap">
        <AllPillars />
      </div>
      <div className="Footer"> 
        <Footer/>

        </div>

      </div>
  );
  }
}

export default App;
