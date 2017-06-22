import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home.js'

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <div className="header-container">
            <img className="logo" alt={'logo'} src={require('./assets/logo.svg')}/>
            <ul className="menu">
              <li className="dropdown">
                <a className="menu-title">ABOUT US</a>

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
                PRESS
                <div className="dropdown-underbar"/>
              </li>
              <li className="dropdown">
                CONTACT
                <div className="dropdown-underbar"/>
              </li>
            </ul>
          </div>
        </div>
        <Home/>
        <div className="App-footer">
          COPYRIGHT ⓒ YBRAIN, INC, ALL RIGHTS RESERVED.
        </div>
      </div>
    );
  }
}

export default App;
