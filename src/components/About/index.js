import React, { Component } from 'react';

import './style.css';
import CommonContact from '../CommonContact';

class About extends Component {

  render() {
    return (
      <div>
        <img className='main-img' alt='' src={require('../../assets/slideimgs-aboutus@3x.png')} />
        <div className='main-container' />
        <CommonContact />
      </div>
    );
  }
}

export default About;
