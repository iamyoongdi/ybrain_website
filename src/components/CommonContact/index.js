import React, { Component } from 'react'
import GoogleMap from '../GoogleMap'
import './style.css'

class CommonContact extends Component {
  render () {
    return (
      <div className='common-contact'>
        <div className='common-contact-container'>
          <div className='common-contact-left'>
            <p className='common-contact-title'>Follow Us</p>
            <div className='common-contact-socialmedia-container'>
              <a className='common-contact-socialmedia' href='https://www.facebook.com/ybrain.inc/' target='_blank' rel='noopener noreferrer'>
                <img alt={'facebook'} src={require('../../assets/facebook-outline.svg')} />
              </a>
              <a className='common-contact-socialmedia' href='http://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                <img alt={'twitter'} src={require('../../assets/twitter-outline.svg')} />
              </a>
              <a className='common-contact-socialmedia' href='http://www.naver.com' target='_blank' rel='noopener noreferrer'>
                <img alt={'naver-blog'} src={require('../../assets/naver-blog-outline.svg')} />
              </a>
              <a className='common-contact-socialmedia' href='https://www.linkedin.com/company-beta/3571676/' target='_blank' rel='noopener noreferrer'>
                <img alt={'linkedin'} src={require('../../assets/linkedin-outline.svg')} />
              </a>
            </div>
            <p className='common-contact-title'>General Inquiry</p>
            <p className='common-contact-content'>inquiries@ybrain.com</p>
            <p className='common-contact-title'>Location</p>
            <p className='common-contact-content'>#802 8th Fl., Pangyo Digital Center C-dong, 242, Pangyo-ro,<br />Bungdang-gu, Seongnam-si, Gyeonggi-do, 13487, Korea<br /><br />경기도 성남시 분당구 판교로 242 판교디지털센터 C동 802호</p>
          </div>
          <div className='common-contact-right'>
            <div className='map'>
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommonContact
