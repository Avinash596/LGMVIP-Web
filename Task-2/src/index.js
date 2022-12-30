import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Excomponent1 from './components/Excomponent1';
import Logincomponent from './components/Logincomponent';
import Listitembind from './components/Listitembind';
import reportWebVitals from './reportWebVitals';
import Databindingcomponent from './components/Databindingcomponent';
import Nesteddropdown from './components/Nesteddropdown';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





//My way of solving this was...
// npm run build, then npm install -g serve,
//npx serve -s build.