import React, { Component } from 'react';

import './style.css';
import CommonContact from '../CommonContact';


class About extends Component {

  render() {
    return (
    <section>
      <img className="main-img" src={require('../../assets/slideimgs-aboutus@3x.png')}/>
      <div></div>
      <CommonContact/>
    </section>
    );
  }
}

export default About;
