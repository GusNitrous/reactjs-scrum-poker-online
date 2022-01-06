import React from 'react';
import ReactDOM from 'react-dom';
import { IndexPage } from './pages/IndexPage';
import './index.css';
import './models/init';

ReactDOM.render(
  <React.StrictMode>
      <IndexPage />
  </React.StrictMode>,
  document.getElementById('root')
);
