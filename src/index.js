import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import browserHistory from 'history/createBrowserHistory'

import './index.css';

import AppComponent from './components/App';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route  component={AppComponent} />
  </Router>
  , document.getElementById('root')
);

registerServiceWorker();
