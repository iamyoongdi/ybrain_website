import React, { Component } from 'react'

import './style.css'
import CommonContact from '../CommonContact'

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
      url: 'https://script.google.com/macros/s/AKfycbzhUDGTD2rJXOLc78amBQIxyq97jY7k2nxI_VX0cjG1t9j5htp0/exec',
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
          <div className='contact-left'>
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
            <p className='contact-content'>inquiries@ybrain.com  I   +82 0321234567</p>
            <p className='contact-title'>Career</p>
            <p className='contact-content'>career@ybrain.com</p>
            <p className='contact-title'>R&D Center</p>
            <p className='contact-content'>경기도 성남시 분당구 판교로 242 판교디지털센터 C동 802호</p>
            <p className='contact-title'>Facility</p>
            <p className='contact-content'>대전광역시 유성구 죽동로 71 2층 202호</p>
          </div>
          <div className='contact-right'>
            <p className='contact-title'>Contact Us</p>
            <form onSubmit={this.handleSubmit}>
              <div className='half first'>
                <input className='contact-input' placeholder='이름' name='name' type='text' value={this.state.name} onChange={this.handleInputChange} />
              </div>
              <div className='half'>
                <input className='contact-input' placeholder='국가'name='region'type='text' value={this.state.region} onChange={this.handleInputChange} />
              </div>
              <div className='half first'>
                <input className='contact-input' placeholder='ybrain@email.com' name='email'type='text' value={this.state.email} onChange={this.handleInputChange} />
              </div>
              <div className='half'>
                <input className='contact-input' placeholder='소속기관' name='org'type='text' value={this.state.org} onChange={this.handleInputChange} />
              </div>
              <input className='contact-input' placeholder='제목' name='subject'type='text' value={this.state.subject} onChange={this.handleInputChange} />
              <textarea className='contact-input textarea' placeholder='메세지를 남겨주세요' name='content'type='text' value={this.state.content} onChange={this.handleInputChange} />
              <input className='contact-submit'type='submit' value='Send' />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contacts
