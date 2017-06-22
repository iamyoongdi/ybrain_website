import React, { Component } from 'react';
import './style.css';
import CommonContact from '../CommonContact';


class About extends Component {

  render() {
    return (
    <div>
      <img className="main-img" src={require('../../assets/slideimgs-aboutus@3x.png')}/>
      <h1>About page</h1>
      <CommonContact/>
    </div>

    );
  }
}

export default About;
