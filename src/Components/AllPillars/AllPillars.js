import React, { Component } from 'react';
import {Pillars} from '../Pillars/Pillars';
import PillarText from '../PillarText/PillarText';

import './AllPillars.css';

class AllPillars extends Component {
	  constructor() {
    super()

      this.click1 = this.click1.bind(this);
      this.click2 = this.click2.bind(this);
      this.click3 = this.click3.bind(this);
      this.click4 = this.click4.bind(this);
      this.click5 = this.click5.bind(this);
      this.click6 = this.click6.bind(this);
      this.click7 = this.click7.bind(this);


    this.state = {
      Pillars: Pillars,
      SelectedPillar: 8,
      active1: false,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      active6: false,
      active7: false,

    }
  }







  click1(event) {
  
    this.setState({ SelectedPillar: 0, active1: true, active2:false, active3:false, active4:false,active5:false,active6:false,active7:false}, () => {
});
  }
  
  click2(event) {
  
    this.setState({ SelectedPillar: 1, active2: true, active1:false, active3:false, active4:false,active5:false,active6:false,active7:false}, () => {
  });
  }
  click3(event) {
  
  this.setState({ SelectedPillar: 2, active3: true, active2:false, active1:false, active4:false,active5:false,active6:false,active7:false}, () => {
  });
  }
  click4(event) {
  
this.setState({ SelectedPillar: 3, active4: true,active2:false, active3:false, active1:false,active5:false,active6:false,active7:false}, () => {
  });
  }
  click5(event) {
  
  this.setState({ SelectedPillar: 4, active5: true,active2:false, active3:false, active4:false,active1:false,active6:false,active7:false}, () => {
  });

  }
  click6(event) {
  
 this.setState({ SelectedPillar: 5, active6: true, active2:false, active3:false, active4:false,active5:false,active1:false,active7:false}, () => {
  });
  }
  click7(event) {
  
  this.setState({ SelectedPillar: 6, active7: true,active2:false, active3:false, active4:false,active5:false,active6:false,active1:false}, () => {
  });
  }

 	render() {
     let rect1 = this.state.active1 ? "active" : "rectangle";
     let rect2 = this.state.active2 ? "active" : "rectangle";
     let rect3= this.state.active3 ? "active" : "rectangle";
     let rect4 = this.state.active4 ? "active" : "rectangle";
     let rect5 = this.state.active5 ? "active" : "rectangle";
     let rect6 = this.state.active6 ? "active" : "rectangle";
     let rect7 = this.state.active7 ? "active" : "rectangle";

    return (
      <div >
      <h1>OpenFog Consortium sine syv søyler som beskriver en fog computing arkitektur</h1>
               <div className="test">
          <div className="dib br3 ma2 pa2 grow" onClick={this.click1}>
                 <h4>{this.state.Pillars[0].name}</h4>
                 <div className={rect1} ></div>
          </div>
          <div className="dib br3 ma2 pa2 grow" onClick={this.click2}>
                 <h4>{this.state.Pillars[1].name}</h4>
                 <div className={rect2} ></div>
          </div>
          <div className="dib br3 ma2 pa2 grow" onClick={this.click3}>
                 <h4>{this.state.Pillars[2].name}</h4>
                 <div className={rect3} ></div>
          </div>
          <div className="dib br3 ma2 pa2 grow" onClick={this.click4}>
                 <h4>{this.state.Pillars[3].name}</h4>
                 <div className={rect4} ></div>
          </div>
          <div className="dib br3 ma2 pa2 grow" onClick={this.click5}>
                 <h4>{this.state.Pillars[4].name}</h4>
                 <div className={rect5} ></div>
          </div>
          <div className="dib br3 ma2 pa2 grow" onClick={this.click6}>
                 <h4>{this.state.Pillars[5].name}</h4>
                 <div className={rect6} ></div>
          </div>
          <div className="dib br3 ma2 pa2 grow" onClick={this.click7}>
                 <h4>{this.state.Pillars[6].name}</h4>
                 <div className={rect7} ></div>
          </div>
        </div>

        <div>
      <PillarText text={this.state.Pillars[this.state.SelectedPillar].text}/> 
        </div>

    </div>
    );
  }
}

export default AllPillars;