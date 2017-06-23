import React, { Component } from 'react'

import './style.css'
import CommonContact from '../CommonContact'

import mainImage from '../../assets/slideimgs-press.png'
import symbolImage from '../../assets/ybrain-symbol@3x.png'

class Contacts extends Component {
  render () {
    return (
      <div className='inner-container'>
        <img className='main-img' alt='' src={mainImage} />
        <div className='main-container'>
          <div className='main-container-header'>
            <img className='main-container-symbol' alt='' src={symbolImage} />
            <h2 className='main-container-title'>Contacts</h2>
          </div>
          <div className='main-container-content' />
        </div>
        <CommonContact />
      </div>
    )
  }
}

export default Contacts
