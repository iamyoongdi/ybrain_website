import React, { Component } from 'react';
import Responsive from 'react-responsive';
import {
  Route,
  Link
} from 'react-router-dom'

import './style.css';
import HomeComponent from '../Home';
import AboutComponent from '../About';
import PressComponent from '../Press';

// Desktop, tablet and mobile setup
const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />;
// const Tablet = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />;
// const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />;

class App extends Component {
  render() {

    return (
      <div className="App">
        <Desktop>
          <div className="App-header">
            <div className="header-container">
              <Link to="/"><img className="logo" alt={'logo'} src={require('../../assets/logo.svg')}/></Link>
              <ul className="menu">
                <li className="dropdown">
                  <Link to='/about' className="menu-title">ABOUT US</Link>
                  <div className="dropdown-underbar"/>
                </li>
                <li className="dropdown">
                  TECHNOLOGY
                  <ul className="dropdown-content">
                    <li><a className="dropdown-title">History - tDCS</a></li>
                    <li><a className="dropdown-title">Mechanism</a></li>
                    <li><a className="dropdown-title"><p>Clinical Indications & <br/> Research Applications</p></a></li>
                  </ul>
                  <div className="dropdown-underbar"/>
                </li>
                <li className="dropdown">
                  PRODUCT
                  <ul className="dropdown-content">
                    <li><a className="dropdown-title">Purpose</a></li>
                    <li><a className="dropdown-title">Features</a></li>
                    <li><a className="dropdown-title">Efficacy & Safety</a></li>
                    <li><a className="dropdown-title">Use</a></li>
                  </ul>
                  <div className="dropdown-underbar"/>
                </li>
                <li className="dropdown">
                  <Link to='/press' className="menu-title">PRESS</Link>
                  <div className="dropdown-underbar"/>
                </li>
                <li className="dropdown">
                  CONTACT
                  <div className="dropdown-underbar"/>
                </li>
              </ul>
            </div>
          </div>
        </Desktop>
        <div className="container">
          <Route exact path="/" component={HomeComponent}/>
          <Route path="/about" component={AboutComponent}/>
          <Route path="/press" component={PressComponent}/>
        </div>
        <div className="App-footer">
          <p>COPYRIGHT ⓒ YBRAIN, INC, ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    );
  }
}

export default App;
