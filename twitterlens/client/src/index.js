// React Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// Site Requirements
import './index.css';
import * as serviceWorker from './serviceWorker';

// JavaScript Component Imports
import App from './App';
import Navbar from './components/Navbar';
import NotFound from './NotFound';
import About from './About';
import Team from './Team';
import Landing from './Landing';


// This is the react routing table. 
// - The exact path is the default page
// - Each other path routes to a JavaScript Component
const routing = (
  <Router>
    <div>
      {/* Render Navbar */}
      <Navbar />
      {/* Create Routing Table as described above */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/analysis" component={App} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        {/* NOTE: This is were all unassigned extensions redirect */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);


// Render the page itself as an element baseed on the routing table provided. Place rendered element in the "root" div in index.html"
ReactDOM.render(
  routing,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
