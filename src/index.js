import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/pages/App';


ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
);