import React from 'react';
// REACT DOM
import ReactDOM from 'react-dom';
// REPORT WEB VITALS
import reportWebVitals from './reportWebVitals';
// JS
import App from './App';
// CSS
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
