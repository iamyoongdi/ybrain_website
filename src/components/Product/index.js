import React, { Component } from 'react';

import './style.css';
import CommonContact from '../CommonContact';

import mainImage from '../../assets/slideimgs-product@2x.png';
import sylbolImage from '../../assets/ybrain-symbol@3x.png';

class Product extends Component {

  render() {
    return (
      <div className='inner-container'>
        <img className='main-img' alt='' src={mainImage} />
        <div className='main-container'>
          <div className='main-container-header'>
            <img className='main-container-symbol' alt='' src={sylbolImage} />
            <h2 className='main-container-title'>Product</h2>
          </div>
          <div className='main-container-content'/>
        </div>
        <CommonContact />
      </div>
    );
  }
}

export default Product;
