import React, { Component } from 'react'
import Responsive from 'react-responsive'
import {
  Route,
  Link
} from 'react-router-dom'
import { translate } from 'react-i18next';

import ScrollLock from 'react-scrolllock'

import './style.css'
import Home from '../Home'
import About from '../AboutUs'
import {
  History,
  Mechanism,
  Cira
} from '../Technology'
import {
  Purpose,
  Features,
  Es,
  Use
} from '../Product'
import Press from '../Press'
import Contacts from '../Contacts'

// Desktop and mobile setup
const Desktop = ({ children }) => <Responsive minWidth={768} children={children} />
const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />

const routeString = {
  HOME: '/',
  ABOUT_US: '/aboutus',
  HISTORY: '/history',
  MECHANISM: '/mechanism',
  CIRA: '/cira',
  PURPOSE: '/purpose',
  FEATURES: '/features',
  ES: '/es',
  USE: '/use',
  PRESS: '/press',
  CONTACTS: '/contacts'
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isMobileMenuOpen: false
    }

    this.openMobileMenu = this.openMobileMenu.bind(this)
    this.closeMobileMenu = this.closeMobileMenu.bind(this)
    this.renderMobileMenu = this.renderMobileMenu.bind(this)
  }

  openMobileMenu () {
    console.log('open menu')
    this.setState({isMobileMenuOpen: true})
  }

  closeMobileMenu () {
    this.setState({isMobileMenuOpen: false})
  }

  renderMobileMenu () {
    if (this.state.isMobileMenuOpen === false) return null
    return (
      <div className='mobile-menu'>
        <img className='mobile-menu-close-button' alt='' src={require('../../assets/close.svg')} onClick={this.closeMobileMenu} />
        <Link to={routeString.HOME} onClick={this.closeMobileMenu}>
          <h2 className='mobile-menu-list'>HOME</h2>
        </Link>
        <Link to={routeString.ABOUT_US} onClick={this.closeMobileMenu}>
          <h2 className='mobile-menu-list'>ABOUT US</h2>
        </Link>
        <div className='mobile-menu-seperator' />
        <h2 className='mobile-menu-list disable'>TECHNOLOGY</h2>
        <Link to={routeString.HISTORY} onClick={this.closeMobileMenu}>
          <h2 className='mobile-menu-list narrow'>History - tDCS</h2>
        </Link>
        <Link to={routeString.MECHANISM} onClick={this.closeMobileMenu}>
          <h2 className='mobile-menu-list narrow'>Mechanism</h2>
        </Link>
        <Link to={routeString.CIRA} onClick={this.closeMobileMenu}>
          <h2 className='mobile-menu-list'>Clinical Indications & Research<br />Applications</h2>
        </Link>
        <div className='mobile-menu-seperator' />
        <h2 className='mobile-menu-list disable'>PRODUCT</h2>
        <Link to={routeString.PURPOSE} onClick={this.closeMobileMenu}>
          <h2 className='mobile-menu-list narrow'>Purpose</h2>
        </Link>
        <Link to={routeString.FEATURES} onClick={this.closeMobileMenu}>
          <h2 className='mobile-menu-list narrow'>Features</h2>
        </Link>
        <Link to={routeString.ES} onClick={this.closeMobileMenu}>
          <h2 className='mobile-menu-list narrow'>Efficacy & Safety</h2>
        </Link>
        <Link to={routeString.USE} onClick={this.closeMobileMenu}>
          <h2 className='mobile-menu-list'>Use</h2>
        </Link>
        <div className='mobile-menu-seperator' />
        <Link to={routeString.PRESS} onClick={this.closeMobileMenu}>
          <h2 className='mobile-menu-list'>PRESS</h2>
        </Link>
        <Link to={routeString.CONTACTS} onClick={this.closeMobileMenu}>
          <h2 className='mobile-menu-list'>CONTACT</h2>
        </Link>
        <ScrollLock />
      </div>
    )
  }

  render () {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      console.log(`change language to ${lng}`)
      i18n.changeLanguage(lng)
    }

    return (
      <div className='App'>
        <Desktop>
          <div className='header'>
            <div className='header-container'>
              <Link to={routeString.HOME}><img className='logo' alt={'logo'} src={require('../../assets/logo.svg')} /></Link>
              <ul className='menu'>
                <li className='dropdown' onClick={() => changeLanguage('kr')}>
                  <a to={routeString.ABOUT_US} className='menu-title'>KR</a>
                  {/* <div className='dropdown-underbar' /> */}
                </li>
                <li className='dropdown' onClick={() => changeLanguage('en')}>
                  <a to={routeString.ABOUT_US} className='menu-title'>EN</a>
                  {/* <div className='dropdown-underbar' /> */}
                </li>
                <li className='dropdown'>
                  <Link to={routeString.ABOUT_US} className='menu-title'>ABOUT US</Link>
                  <div className='dropdown-underbar' />
                </li>
                <li className='dropdown'>
                  TECHNOLOGY
                  <ul className='dropdown-content'>
                    <li>
                      <Link to={routeString.HISTORY} className='menu-title'>
                        <a className='dropdown-title'>History - tDCS</a>
                      </Link>
                    </li>
                    <li>
                      <Link to={routeString.MECHANISM} className='menu-title'>
                        <a className='dropdown-title'>Mechanism</a>
                      </Link>
                    </li>
                    <li>
                      <Link to={routeString.CIRA} className='menu-title'>
                        <a className='dropdown-title'><p>Clinical Indications & <br /> Research Applications</p></a>
                      </Link>
                    </li>
                  </ul>
                  <div className='dropdown-underbar' />
                </li>
                <li className='dropdown'>
                  PRODUCT
                  <ul className='dropdown-content'>
                    <li>
                      <Link to={routeString.PURPOSE} className='menu-title'>
                        <a className='dropdown-title'>Purpose</a>
                      </Link>
                    </li>
                    <li>
                      <Link to={routeString.FEATURES} className='menu-title'>
                        <a className='dropdown-title'>Features</a>
                      </Link>
                    </li>
                    <li>
                      <Link to={routeString.ES} className='menu-title'>
                        <a className='dropdown-title'>Efficacy & Safety</a>
                      </Link>
                    </li>
                    <li>
                      <Link to={routeString.USE} className='menu-title'>
                        <a className='dropdown-title'>Use</a>
                      </Link>
                    </li>
                  </ul>
                  <div className='dropdown-underbar' />
                </li>
                <li className='dropdown'>
                  <Link to={routeString.PRESS} className='menu-title'>PRESS</Link>
                  <div className='dropdown-underbar' />
                </li>
                <li className='dropdown'>
                  <Link to={routeString.CONTACTS} className='menu-title'>CONTACT</Link>

                  <div className='dropdown-underbar' />
                </li>
              </ul>
            </div>
          </div>
        </Desktop>
        <Mobile>
          <div className='mobile-header'>
            <img onClick={this.openMobileMenu} className='mobile-logo' alt={'logo'} src={require('../../assets/logo.svg')} />
            <a onClick={this.openMobileMenu} className='mobile-expand'>▼</a>
            {this.renderMobileMenu()}
          </div>
        </Mobile>
        <div className='container'>
          <Route exact path={routeString.HOME} component={Home} language />
          <Route path={routeString.ABOUT_US} component={About} />
          <Route path={routeString.HISTORY} component={History} />
          <Route path={routeString.MECHANISM} component={Mechanism} />
          <Route path={routeString.CIRA} component={Cira} />
          <Route path={routeString.PURPOSE} component={Purpose} />
          <Route path={routeString.FEATURES} component={Features} />
          <Route path={routeString.ES} component={Es} />
          <Route path={routeString.USE} component={Use} />
          <Route path={routeString.PRESS} component={Press} />
          <Route path={routeString.CONTACTS} component={Contacts} />
        </div>
        <div className='App-footer'>
          <p>대표이사 이기원   I   COPYRIGHT ⓒ YBRAIN, INC, ALL RIGHTS RESERVED.</p>

        </div>
      </div>
    )
  }
}

export default translate('translations')(App)
