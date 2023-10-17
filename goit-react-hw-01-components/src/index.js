// import most value package
import React from 'react';
import ReactDOM from 'react-dom/client';
//import  my components
import { App } from 'components/App';
// import css
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
