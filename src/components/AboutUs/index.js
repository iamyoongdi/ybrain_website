import React, { Component } from 'react'

import Responsive from 'react-responsive'

import './style.css'
import CommonContact from '../CommonContact'
import { translate } from 'react-i18next'

import mainImage from '../../assets/slideimgs-aboutus.png'
import mainImageMobile from '../../assets/slideimgs-aboutus-mobile@2x.png'
import symbolImage from '../../assets/ybrain-symbol@3x.png'

const Desktop = ({ children }) => <Responsive minWidth={768} children={children} />
const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />

class AboutUs extends Component {
  render () {
    const { t } = this.props
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
            <h2 className='main-container-title'>About Us</h2>
          </div>
          <div className='main-container-content' />
          <div className='about-us-company'>
            <p className='company-title'>"Think<br /><font style={{color: '#00afdb'}}>Healthy</font>"</p>
            <p className='company-text'>{t('aboutUsSubject')}</p>
            <div className='mission'>
              <img className='mission-image' alt={'mission'} src={require('../../assets/img-mission.png')} />
              <div className='mission-text'>
                <hr className='bar' width='70px;' height='2px;' border='solid 2px' color='#00afdb' align='left' />
                <p className='mission-title'>MISSION</p>
                <p className='mission-contents'>
                {t('aboutUsMission')}
                </p>
                </div>
            </div>
            <div className='vision'>
              <img className='vision-image' alt={'vision'} src={require('../../assets/img-vision.png')} />
              <div className='vision-text'>
                <hr className='bar' width='70px;' height='2px;' border='solid 2px' color='#00afdb' align='left' />
                <p className='vision-title'>VISION</p>
                <p className='vision-contents'>
                {t('aboutUsVision')}
                </p>
              </div>
            </div>
          </div>
          <img className='timeline' alt={'company-timeline'} src={require(`../../assets${t('imageRoute')}/img-timeline.png`)} />
        </div>
        <CommonContact />
      </div>
    )
  }
}

export default translate('translations')(AboutUs)
