import React, { Component } from 'react'

import './style.css'
import CommonContact from '../CommonContact'

import mainImage from '../../assets/slideimgs-press.png'
import symbolImage from '../../assets/ybrain-symbol@3x.png'
import GoogleMap from '../GoogleMap'
import Responsive from 'react-responsive'


const Desktop = ({ children }) => <Responsive minWidth={768} children={children} />
const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />


class Contacts extends Component {
  render () {
    return (
      <div className='inner-container'>
        <Desktop>
          <div className='contact-map'>
            <GoogleMap />
          </div>
        </Desktop>
        <Mobile>
          <div className='contact-map'>
            <GoogleMap />
          </div>
        </Mobile>
        <div className='main-container'>
          <div className='main-container-header'>
            <img className='main-container-symbol' alt='' src={symbolImage} />
            <h2 className='main-container-title'>Contact</h2>
          </div>
          <div className='main-container-content' />
        </div>
      </div>
    )
  }
}

export default Contacts
