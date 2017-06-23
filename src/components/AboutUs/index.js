import React, { Component } from 'react'

import Responsive from 'react-responsive'

import './style.css'
import CommonContact from '../CommonContact'

import mainImage from '../../assets/slideimgs-aboutus.png'
import mainImageMobile from '../../assets/slideimgs-aboutus-mobile@2x.png'
import symbolImage from '../../assets/ybrain-symbol@3x.png'

const Desktop = ({ children }) => <Responsive minWidth={768} children={children} />
const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />

class AboutUs extends Component {
  render () {
    return (
      <div className='inner-container'>
        <Desktop>
          <img className='main-img' alt='' src={mainImage} />
        </Desktop>
        <Mobile>
          <img className='main-img' alt='' src={mainImageMobile} />
        </Mobile>
        <div className='main-container'>
          <div className='main-container-header'>
            <img className='main-container-symbol' alt='' src={symbolImage} />
            <h2 className='main-container-title'>About Us</h2>
          </div>
          <div className='main-container-content' />
        </div>
        <CommonContact />
      </div>
    )
  }
}

export default AboutUs
