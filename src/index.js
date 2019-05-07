import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import PillarComplete from './Components/PillarComplete/PillarComplete';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
