import React, { Component } from 'react'
import Responsive from 'react-responsive'

import './style.css'
import CommonContact from '../CommonContact'

import mainImage from '../../assets/slideimgs-press.png'
import mainImageMobile from '../../assets/slideimgs-press-mobile@2x.png'
import symbolImage from '../../assets/ybrain-symbol@3x.png'



const Desktop = ({ children }) => <Responsive minWidth={768} children={children} />
const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />

class Press extends Component {
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
            <h2 className='main-container-title'>Press</h2>
          </div>

          <div className='press-container'>
            <div class="video">
              <iframe width="1000" height="500" src="https://www.youtube.com/embed/VHp1tQXx6rc?ecver=1" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        </div>
        <CommonContact />
      </div>
    )
  }
}

export default Press
