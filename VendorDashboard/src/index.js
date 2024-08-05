// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import CustomerApp from './CustomerApp'; 
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <CustomerApp />
  </React.StrictMode>,
  document.getElementById('root')
);
