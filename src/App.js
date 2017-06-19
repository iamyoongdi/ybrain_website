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
                <ul className="dropdown-content">
                  <li><a className="dropdown-title">Vision</a></li>
                  <li><a className="dropdown-title">Members</a></li>
                  <li><a className="dropdown-title">History & Location</a></li>
                </ul>
                <div className="dropdown-underbar"/>
              </li>
              <li className="dropdown">
                TEHCNOLOGY
                <ul className="dropdown-content">
                  <li><a className="dropdown-title">Vision</a></li>
                  <li><a className="dropdown-title">Members</a></li>
                  <li><a className="dropdown-title"><p>Clinical Indications & <br/> Research Applications</p></a></li>
                </ul>
                <div className="dropdown-underbar"/>
              </li>

              <li className="dropdown">
                PRODUCT
                <div className="dropdown-underbar"/>
              </li>
              <li className="dropdown">
                PRESS
                <div className="dropdown-underbar"/>
              </li>
              <li className="dropdown">
                BLOG
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
