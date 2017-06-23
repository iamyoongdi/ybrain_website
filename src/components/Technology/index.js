import React, { Component } from 'react'
import Responsive from 'react-responsive'

import './style.css'
import CommonContact from '../CommonContact'

import mainImage from '../../assets/slideimgs-technology.png'
import mainImageMobile from '../../assets/slideimgs-technology-mobile.png'
import symbolImage from '../../assets/ybrain-symbol@3x.png'

const Desktop = ({ children }) => <Responsive minWidth={768} children={children} />
const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />

class History extends Component {
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
            <h2 className='main-container-title'>History</h2>
          </div>
          <div className='main-container-content' />
        </div>
        <CommonContact />
      </div>
    )
  }
}

class Mechanism extends Component {
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
            <h2 className='main-container-title'>Mechanism</h2>
          </div>
          <div className='main-container-content' />
        </div>
        <CommonContact />
      </div>
    )
  }
}

class Cira extends Component {
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
            <h2 className='main-container-title'>Clinical Indications & Research
              Applications</h2>
          </div>
          <div className='main-container-content' />
        </div>
        <CommonContact />
      </div>
    )
  }
}

export {
  History,
  Mechanism,
  Cira
}
