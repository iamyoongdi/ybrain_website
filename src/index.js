import React from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'

import registerServiceWorker from './registerServiceWorker'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import browserHistory from 'history/createBrowserHistory'
import i18n from './utils/i18n'

import './index.css'

import AppComponent from './components/App'
import ScrollToTopComponent from './components/ScrollToTop'

ReactDOM.render(
  <I18nextProvider i18n={i18n()}>
    <Router history={browserHistory} >
      <ScrollToTopComponent>
        <Route onUpdate={() => window.scrollTo(0, 0)} component={AppComponent} />
      </ScrollToTopComponent>
    </Router>
  </I18nextProvider>
  , document.getElementById('root')
)

registerServiceWorker()
