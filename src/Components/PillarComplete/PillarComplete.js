import React, { Component } from 'react';
import PillarComponent from '../PillarComponent/PillarComponent';
import PillarText from '../PillarText/PillarText';
import {Pillars} from '../Pillars/Pillars';

class PillarComplete extends Component {
	  constructor() {
    super()

      this.rectClick = this.rectClick.bind(this);

    this.state = {
      Pillars: Pillars,
      SelectedPillar: 1,
            SelectedPillar2: 1,

      color: 'white',
      active: false,
	  pillarID: '',
	  activeItem: false 

    }
  }

  rectClick(event) {
  
    this.setState({
    

    SelectedPillar: event, activeItem: true }, function () {
console.log(this.SelectedPillar2)   

});

  }

 	render() {

    return (
      <div className="App">
      <h1>OpenFogConsortium sine syv søyler som beskriver en fog computing arkitektur</h1>
     	<div className="content-wrap">
      {this.state.Pillars.map((pillar, i)=> {
      return <PillarComponent 
      onClick={this.rectClick} 
      key={this.state.Pillars[i].id} 
      id={this.state.Pillars[i].id} 
      name={this.state.Pillars[i].name} 
      active={this.state.activeItem}
/>

    }
    )
  }


  <PillarText text={this.state.Pillars[(this.state.SelectedPillar-1)].text}/>
        </div>
        

      </div>
    );
  }
}

export default PillarComplete;