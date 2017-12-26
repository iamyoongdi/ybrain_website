import React, { Component } from 'react'

import './style.css'
import CommonContact from '../CommonContact'
import { translate } from 'react-i18next'

import mainImage from '../../assets/slideimgs-press.png'
import symbolImage from '../../assets/ybrain-symbol@3x.png'
import GoogleMap from '../GoogleMap'
import Responsive from 'react-responsive'
import $ from 'jquery'

const Desktop = ({ children }) => <Responsive minWidth={768} children={children} />
const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />

class Contacts extends Component {
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
        org: this.state.org,
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
    return (
      <div className='contact-inner-container'>
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
          <div className='contacts-left'>
            <p className='contact-title'>Follow Us</p>
            <div className='social-media-container'>
              <a className='socialmedia' href='https://www.facebook.com/ybrain.inc/' target='_blank' rel='noopener noreferrer'>
                <img alt={'facebook'} src={require('../../assets/facebook-solid.svg')} />
              </a>
              <a className='socialmedia' href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer'>
                <img alt={'twitter'} src={require('../../assets/twitter-solid.svg')} />
              </a>
              <a className='socialmedia' href='http://www.naver.com/' target='_blank' rel='noopener noreferrer'>
                <img alt={'naver-blog'} src={require('../../assets/naver-blog-solid.svg')} />
              </a>
              <a className='socialmedia' href='https://www.linkedin.com/company-beta/3571676/' target='_blank' rel='noopener noreferrer'>
                <img alt={'linkedin'} src={require('../../assets/linkedin-solid.svg')} />
              </a>
            </div>
            <p className='contact-title'>General Inquiry</p>
            <p className='contact-content'>inquiries@ybrain.com  I   +82 3180601471</p>
            <p className='contact-title'>Career</p>
            <p className='contact-content'>career@ybrain.com</p>
            <p className='contact-title'>R&D Center</p>
            <p className='contact-content'>경기도 성남시 수정구 대왕판교로 815, 기업지원허브 창업존 8층, P-812</p>
            <p className='contact-title'>HQ / Factory</p>
            <p className='contact-content'>대전광역시 유성구 죽동로 71 2층 202호</p>
          </div>
          <div className='contacts-right'>
            <p className='contact-title'>Contact Us</p>
            <form onSubmit={this.handleSubmit}>
              <div className='half first'>
                <div className='name-contatiner'>
                  <input className='contact-input' placeholder='Name' name='name' type='text' value={this.state.name} onChange={this.handleInputChange} />
                </div>
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
              <textarea className='contact-input textarea' placeholder='Leave a message here' name='content'type='text' value={this.state.content} onChange={this.handleInputChange} />
              <input className='contact-submit'type='submit' value='Send' />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default translate('translations')(Contacts)
