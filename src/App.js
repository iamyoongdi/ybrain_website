import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home.js'

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
            <img src={require('./assets/logo.svg')}/>
            <div className="Header-menu">
              <ul>
                <li>ABOUT US</li>
                <li>TEHCNOLOGY</li>
                <li>PRODUCT</li>
                <li>PRESS</li> 
                <li>BLOG</li>
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
