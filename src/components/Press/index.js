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

          <div className='main-container-content'>
            <div class="videoWrapper">
              <div class="video">
                <iframe width="924" height="410" src="https://www.youtube.com/embed/VHp1tQXx6rc?ecver=1" allowfullscreen></iframe>
            </div>
            <div class="press-thumbnails-container">
              <a className='press-thumnail' href='http://news.mk.co.kr/newsRead.php?&year=2017&no=229607' target='_blank' rel='noopener noreferrer'>
                <img alt={'press-mk'} src={require('../../assets/press-1.png')} />
              </a>
              <a className='press-thumnail' href='http://khnews.kheraldm.com/view.php?ud=20170618000154&md=20170621003401_BL' target='_blank' rel='noopener noreferrer'>
                <img alt={'press-kh'} src={require('../../assets/press-2.png')} />
              </a>
              <a className='press-thumnail' href='http://www.hankookilbo.com/v/0b63b8e99b06491b892ebc5c81ee617a' target='_blank' rel='noopener noreferrer'>
                <img alt={'press-hankook'} src={require('../../assets/press-3.png')} />
              </a>
              <a className='press-thumnail' href='http://news.hankyung.com/article/201703135023i?nv=o' target='_blank' rel='noopener noreferrer'>
                <img alt={'press-hk'} src={require('../../assets/press-4.png')} />
              </a>
            </div>
          </div>
        </div>
        </div>
        <CommonContact />
      </div>
    )
  }
}

export default Press
