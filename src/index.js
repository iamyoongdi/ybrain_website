import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import browserHistory from 'history/createBrowserHistory'

import './index.css'

import AppComponent from './components/App'
import ScrollToTopComponent from './components/ScrollToTop'

ReactDOM.render(
  <Router history={browserHistory} >
    <ScrollToTopComponent>
      <Route onUpdate={() => window.scrollTo(0, 0)} component={AppComponent} />
    </ScrollToTopComponent>
  </Router>
  , document.getElementById('root')
)

registerServiceWorker()
