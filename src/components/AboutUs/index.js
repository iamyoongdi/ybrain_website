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
            <p className='company-text'>와이브레인이 뇌 과학을 통해 혁신하고자 하는 방향입니다.</p>
            <div className='mission'>
              <img className='mission-image' alt={'mission'} src={require('../../assets/img-mission.png')} />
              <div className='mission-text'>
                <hr className='bar' width='70px;' height='2px;' border='solid 2px' color='#00afdb' align='left' />
                <p className='mission-title'>MISSION</p>
                <p className='mission-contents'>와이브레인은 뇌 과학을 통해서 헬스케어 혁신을 이루고자 합니다.<br />우리는 정신질환 환자들을 위한 치료, 진단, 관리를 모두 포함하는 헬스케어 솔루션을 개발하고 있습니다. 우리가 가진 기술로 더 많은 환자들의 일상의 질을 개선하고, 치료기간동안 더 나은 경험을 제공하고자 합니다.</p>
              </div>
            </div>
            <div className='vision'>
              <img className='vision-image' alt={'vision'} src={require('../../assets/img-vision.png')} />
              <div className='vision-text'>
                <hr className='bar' width='70px;' height='2px;' border='solid 2px' color='#00afdb' align='left' />
                <p className='vision-title'>VISION</p>
                <p className='vision-contents'>와이브레인은 혁신을 통해서 가치를 창출합니다. <br />뇌과학, 신소재, 의공학, 전자 공학, 컴퓨터 공학 등 다양한 분야의 전문성을 기반으로 언제 어디서나 환자들의 뇌 기능 상태를 수집, 저장, 분석, 강화, 관리하는 혁신적인 솔루션을 개발합니다. 와이브레인은 협력을 통해 진보함으로써 우리가 이루고자 하는 가치를 창출합니다. 와이브레인이 가진 기업문화, 즉 협력을 통한 진보는 모든 회사 구성원들과 Ybrain의 파트너를 위한 것이며 그것이 우리가 함께 일하는 방식입니다.</p>
              </div>
            </div>
          </div>
          <img className='timeline' alt={'company-timeline'} src={require('../../assets/img-timeline.png')} />
        </div>
        <CommonContact />
      </div>
    )
  }
}

export default translate('translations')(AboutUs)
