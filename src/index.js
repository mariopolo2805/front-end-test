import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import './index.css';
import Routes from './config/Routes';
import Providers from './config/Providers';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Providers>
    <Routes />
  </Providers>,
  document.getElementById('root')
);
registerServiceWorker();
