import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MaterialProvider from './components/Context';

ReactDOM.render(
  <MaterialProvider>
    <App />
  </MaterialProvider>,
  document.getElementById('root')
);
