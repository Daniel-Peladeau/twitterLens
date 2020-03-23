import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Stock from './Stock';
import Twitter from './Twitter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Twitter />
    <Stock />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
