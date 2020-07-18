import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './app.css';

const axe = require('react-axe');

if (process.env.NODE_ENV === 'development') {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <React.StrictMode>
    <App message="React !!!" />
  </React.StrictMode>,
  document.querySelector('#app'),
);
