import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { IndexPage } from './pages/IndexPage';
import './index.css';
import './models/init';

// Only in dev mode
import 'effector-logger/inspector';

ReactDOM.render(
  <React.StrictMode>
      <IndexPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
