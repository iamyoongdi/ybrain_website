import React, { Component } from 'react'
import Responsive from 'react-responsive'

import './style.css'
import CommonContact from '../CommonContact'
import { translate } from 'react-i18next'

import mainImage from '../../assets/slideimgs-product.png'
import mainImageMobile from '../../assets/slideimgs-product-mobile@2x.png'
import symbolImage from '../../assets/ybrain-symbol@3x.png'

const Desktop = ({ children }) => <Responsive minWidth={768} children={children} />
const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />

class PurposePage extends Component {
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
            <h2 className='main-container-title'>Purpose</h2>
          </div>
          <div className='main-container-content' />
          <div className='purpose-texts-contatiner'>
            <div className='text-mind-contatiner'>
              <p className='title' >{t('productPurposeSubject1')}</p>
              <p className='contents' >{t('productPurposeContents1')} <br />{t('productPurposeContents2')} </p>
            </div>
            <div className='text-value-contatiner'>
              <p className='title' >{t('productPurposeSubject2')}</p>
              <p className='contents' >{t('productPurposeContents3')}  <br />{t('productPurposeContents4')} </p>
            </div>
            <img className='purpose-bg' alt='patient' src={require('../../assets/contents-product-purpose.png')} />
          </div>

        </div>
        <CommonContact />
      </div>
    )
  }
}

class FeaturesPage extends Component {
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
            <h2 className='main-container-title'>Features</h2>
          </div>
          <div className='main-container-content' />
          <img className='features' alt='product-feature' src={require(`../../assets${t('imageRoute')}/img-product-features.png`)} />
          {/* <div className='text-hospital-container'>
              <p className='title'>병원 중심의 재택 연계 치료</p>
              <p className='contents'>제품 ‘MIND’ 는 매일 병원을 방문하기 어려운 환자분들에게 보다 나은 치료 환경을 제공하기 위해 웨어러블 기기로 개발되었습니다. 의사선생님의 감독하에 재택 연계 치료가 가능합니다.</p>
            </div>
            <div className='text-patient-container'>
              <p className='title'>환자에게 친근한 의료기기</p>
              <p className='contents'>제품 ‘MIND’는 이미지와 같이 밴드를 착용하고, 마우스처럼 생긴 모듈의 전원을 작동시키면 치료를 진행하실 수 있습니다. 기존의 치료 기기들과 다르게 사용이 간편하고 부담되지 않는 동시에 안전성이 입증된 의료기기입니다.</p>
            </div>
            <div className='text-doctor-container'>
              <p className='title'>의사에게 편리한 의료기기</p>
              <p className='contents'>‘MIND’ 제품은 의사와 환자 두 사용자의 편의성을 모두 고려했습니다. 첫째, ‘MIND’는 컴팩트한 사이즈의 기기로 별도의 넓은 공간을 필요로 하지 않습니다. 의사분들은 기기설치를 위한 넓은 공간이 없이도 보다 안전하고 쉽게 여러 환자분들을 더 많이 치료할 수 있습니다. 둘째, 직관적이고 쉬운 프로그램이 제공됩니다. 친숙하고 간단한 프로그램으로 보다 간편하게 치료를 진행하게 됩니다.</p>
            </div> */}
        </div>
        <CommonContact />
      </div>
    )
  }
}

class EsPage extends Component {
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
            <h2 className='main-container-title'>Efficacy & Safety</h2>
          </div>
          <div className='main-container-content' />
          <img className='madrs-graph-comp' alt='madrs' src={require(`../../assets${t('imageRoute')}/madrs_expanded.svg`)} />
          <div className='madrs-texts-contatiner'>
            <div className='text-safety-contatiner'>
              <p className='title' >{t('productEsSubject1')}</p>
              <p className='contents' >{t('productEsContents1')}</p>
            </div>
            <div className='text-efficacy-contatiner'>
              <p className='title' >{t('productEsSubject2')}</p>
              <p className='contents' >{t('productEsContents2')}</p>
            </div>
          </div>
        </div>
        <CommonContact />
      </div>
    )
  }
}

class UsePage extends Component {
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
            <h2 className='main-container-title'>Use</h2>
          </div>
          <div className='main-container-content' />
          <div className='four-thumbnails'>
            <img className='station' alt='' src={require(`../../assets${t('imageRoute')}/station.png`)} />
            <img className='module' alt='' src={require(`../../assets${t('imageRoute')}/module.png`)} />
            <img className='band' alt='' src={require(`../../assets${t('imageRoute')}/band.png`)} />
            <img className='complete' alt='' src={require(`../../assets${t('imageRoute')}/complete.png`)} />
          </div>
          <p className='legal-notice'>{t('productUseLegal')}</p>
        </div>
        <CommonContact />
      </div>
    )
  }
}
const Purpose = translate('translations')(PurposePage)
const Features = translate('translations')(FeaturesPage)
const Es = translate('translations')(EsPage)
const Use = translate('translations')(UsePage)

export {
  Purpose,
  Features,
  Es,
  Use
}
