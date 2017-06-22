import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { Route, HashRouter } from 'react-router-dom';
import browserHistory from 'history/createBrowserHistory'

import './index.css';

import AppComponent from './components/App';

ReactDOM.render(
  <HashRouter history={browserHistory}>
    <Route component={AppComponent} />
  </HashRouter>
  , document.getElementById('root')
);

registerServiceWorker();
