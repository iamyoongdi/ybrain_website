import React, { Component } from 'react'
import GoogleMap from '../GoogleMap'
import './style.css'
import { translate } from 'react-i18next'

class CommonContact extends Component {
  render () {
    const { t } = this.props
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
            <p className='common-contact-content'>inquiries@ybrain.com  I   +82 3180601471</p>
            <p className='common-contact-title'>Location</p>
            <p className='common-contact-content'>#P-812 815, Daewangpangyo-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do,<br />13449, Republic of Korea<br /><br />경기도 성남시 수정구 대왕판교로 815, 기업지원허브 창업존 8층, P-812</p>
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

export default translate('translations')(CommonContact)
