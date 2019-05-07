import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import PillarComplete from './Components/PillarComplete/PillarComplete';

import 'tachyons';
import './App.css';
class App extends Component {

  render() {
    return (
      <div className="App"> 
      {/*<Navigation />*/}
            <PillarComplete />

      <div className="Footer"> 
        <Footer/>

        </div>

      </div>
  );
  }
}

export default App;
