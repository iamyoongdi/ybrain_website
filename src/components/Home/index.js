import React, { Component } from 'react'
import Responsive from 'react-responsive'
import ImageGallery from 'react-image-gallery'
import './style.css'
import './image-gallery.css'
import { translate } from 'react-i18next'
import GoogleMap from '../GoogleMap'
import $ from 'jquery'

const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />
const Desktop = ({ children }) => <Responsive minWidth={768} children={children} />

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      region: '',
      email: '',
      org: '',
      subject: '',
      content: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const name = target.name

    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    $.ajax({
      type: 'POST',
      url: 'https://script.google.com/macros/s/AKfycbzWlaF20LFY1BgSQEW6JnLMe45vK1VyHaf9bURukk4MJ7AWRL0/exec',
      data: {
        name: this.state.name,
        region: this.state.region,
        email: this.state.email,
        org: this.state.dorg,
        subject: this.state.subject,
        content: this.state.content
      },
      success: function (data) { alert('Send complete..') },
      error: function () { alert('Send Error..') },
      dataType: 'json'
    })
    event.preventDefault()
  }

  handleImageLoad (event) {
    console.log('Image loaded ', event.target)
  }

  render () {
    const { t } = this.props
    const images = [
      {
        original: require(`../../assets${t('imageRoute')}/landing_1.png`)
      },
      {
        original: require(`../../assets${t('imageRoute')}/landing_2.png`)
      },
      {
        original: require(`../../assets${t('imageRoute')}/landing_3.png`)
      }
    ]
    const mobileImages = [
      {
        original: require(`../../assets${t('imageRoute')}/landing_1_mobile.png`)
      },
      {
        original: require(`../../assets${t('imageRoute')}/landing_2_mobile.png`)
      },
      {
        original: require(`../../assets${t('imageRoute')}/landing_3_mobile.png`)
      }
    ]

    return (
      <section>
        <div className='ig'>
          <Desktop>
            <ImageGallery
              items={images}
              slideInterval={2000}
              showThumbnails={false}
              showBullets
              showFullscreenButton={false}
              showPlayButton={false}
              onImageLoad={this.handleImageLoad}
            />
          </Desktop>
          <Mobile>
            <ImageGallery
              items={mobileImages}
              slideInterval={2000}
              showThumbnails={false}
              showBullets
              showFullscreenButton={false}
              showPlayButton={false}
              onImageLoad={this.handleImageLoad}
            />
          </Mobile>
        </div>
        <div className='contact'>
          <div className='contact-container'>
            <div className='contact-left'>
              <p className='contact-title'>Follow Us</p>
              <div className='socialmedia-container'>
                <a className='socialmedia' href='https://www.facebook.com/ybrain.inc/' target='_blank' rel='noopener noreferrer'>
                  <img alt={'facebook'} src={require('../../assets/facebook-solid.svg')} />
                </a>
                <a className='socialmedia' href='http://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                  <img alt={'twitter'} src={require('../../assets/twitter-solid.svg')} />
                </a>
                <a className='socialmedia' href='http://www.naver.com' target='_blank' rel='noopener noreferrer'>
                  <img alt={'naver-blog'} src={require('../../assets/naver-blog-solid.svg')} />
                </a>
                <a className='socialmedia' href='https://www.linkedin.com/company-beta/3571676/' target='_blank' rel='noopener noreferrer'>
                  <img alt={'linkedin'} src={require('../../assets/linkedin-solid.svg')} />
                </a>
              </div>
              <p className='contact-title'>General Inquiry</p>
              <p className='contact-content'>inquiries@ybrain.com  I   +82 3180601471</p>
              <p className='contact-title'>Location</p>
              <p className='contact-content'>#P-812 815, Daewangpangyo-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do,<br />13449, Republic of Korea<br /><br />경기도 성남시 수정구 대왕판교로 815, 기업지원허브 창업존 8층, P-812</p>
              <div className='home-map'>
                <GoogleMap />
              </div>
            </div>
            <div className='contact-right'>
              <p className='contact-title'>Contact Us</p>
              <form onSubmit={this.handleSubmit} method='POST' action='https://script.google.com/macros/s/AKfycbzhUDGTD2rJXOLc78amBQIxyq97jY7k2nxI_VX0cjG1t9j5htp0/exec'>
                <div className='half first'>
                  <input className='contact-input' placeholder='Name' name='name' type='text' value={this.state.name} onChange={this.handleInputChange} />
                </div>
                <div className='half'>
                  <input className='contact-input' placeholder='Country'name='region'type='text' value={this.state.region} onChange={this.handleInputChange} />
                </div>
                <div className='half first'>
                  <input className='contact-input' placeholder='ybrain@email.com' name='email'type='text' value={this.state.email} onChange={this.handleInputChange} />
                </div>
                <div className='half'>
                  <input className='contact-input' placeholder='Affiliation' name='org'type='text' value={this.state.org} onChange={this.handleInputChange} />
                </div>
                <input className='contact-input' placeholder='Subject' name='subject'type='text' value={this.state.subject} onChange={this.handleInputChange} />
                <textarea className='contact-input' placeholder='Leave a message here' name='content'type='text' value={this.state.content} onChange={this.handleInputChange} />
                <input className='contact-submit' type='submit' value='Send' />
              </form>
            </div>
          </div>
        </div>
        <Mobile>
          <div className='map'>
            <GoogleMap />
          </div>
        </Mobile>
      </section>
    )
  }
}

export default translate('translations')(Home)
