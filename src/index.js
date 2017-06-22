import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<Router history = {browserHistory}>
//       <Route path = "/" component = {App}>
//          <IndexRoute component = {Home} />
//          <Route path = "home" component = {Home} />
//          <Route path = "about" component = {About} />
//          <Route path = "articles" component = {Articles} />
//       </Route>
//    </Router>, document.getElementById('root'));