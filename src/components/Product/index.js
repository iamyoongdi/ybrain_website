import React, { Component } from 'react'
import Responsive from 'react-responsive'

import './style.css'
import CommonContact from '../CommonContact'

import mainImage from '../../assets/slideimgs-product.png'
import mainImageMobile from '../../assets/slideimgs-product-mobile@2x.png'
import symbolImage from '../../assets/ybrain-symbol@3x.png'

const Desktop = ({ children }) => <Responsive minWidth={768} children={children} />
const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />

class Purpose extends Component {
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
            <h2 className='main-container-title'>Purpose</h2>
          </div>
          <div className='main-container-content' />
          <div className='purpose-texts-contatiner'>
            <div className='text-mind-contatiner'>
              <p className='title' >우울증 치료기기 'MINDD'</p>
              <p className='contents' >경두개 전기 자극 기술을 사용화한 제품으로 미세한 전기 자극을 통해 <br />뇌 신경을 조절, 우울증과 같은 정신 질환을 개선해주는 제품입니다.</p>
            </div>
            <div className='text-value-contatiner'>
              <p className='title' >환자에게 보다 가치있는 치료를 제공합니다.</p>
              <p className='contents' >실제 정신질환이 있는 환자들에게 보다 가치있는 치료를 제공하기위해 <br />매 순간 실제 의료 현장에서 부족한 부분을 찾아내고, 끊임없이 연구하고 개발합니다.</p>
            </div>
            <img className='purpose-bg' alt='patient' src={require('../../assets/contents-product-purpose.png')} />
          </div>

        </div>
        <CommonContact />
      </div>
    )
  }
}

class Features extends Component {
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
            <h2 className='main-container-title'>Features</h2>
          </div>
          <div className='main-container-content' />
          <img className='features' alt='product-feature' src={require('../../assets/imgProductFeature.png')} />
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

class Es extends Component {
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
            <h2 className='main-container-title'>Efficacy & Safety</h2>
          </div>
          <div className='main-container-content' />
          <img className='madrs-graph-comp' alt='madrs' src={require('../../assets/madrs_comp.svg')} />
          <div className='madrs-texts-contatiner'>
            <div className='text-safety-contatiner'>
              <p className='title' >안전성</p>
              <p className='contents' >국내에서 연구, 개발, 생산을 한 제품으로 국내 메이저 대학병원 7곳에서 96명을 대상으로 직접 허가 임상을 실시한 제품이므로 안전성과 효능성 모두 입증받았습니다.</p>
            </div>
            <div className='text-efficacy-contatiner'>
              <p className='title' >신뢰성</p>
              <p className='contents' >제품 ‘MIND’ 는 저희 와이브레인에서 연구, 개발, 생산을 모두 진행합니다. 카이스트 출신의 석/박사 및 뇌공학박사, 의료전문가 등 신뢰할 수 있는 전문가들로 구성되어 있습니다. 또한, ‘MIND’ 가 가지고 있는 경두개 전기 자극 기술은 국내뿐만 아니라, 해외에서도 많은 연구와 임상이 이루어진 기술로서 이에 대한 신뢰성은 이미 국내외로 모두 입증되어있습니다.</p>
            </div>
          </div>
        </div>
        <CommonContact />
      </div>
    )
  }
}

class Use extends Component {
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
            <h2 className='main-container-title'>Use</h2>
          </div>
          <div className='main-container-content' />
          <img className='oval' alt='' src={require('../../assets/icOvalGradient.svg')} />
          <div className='four-thumbnails'>
            <img className='station' alt='' src={require('../../assets/station.png')} />
            <img className='module' alt='' src={require('../../assets/module.png')} />
            <img className='band' alt='' src={require('../../assets/band.png')} />
            <img className='complete' alt='' src={require('../../assets/complete.png')} />
          </div>
        </div>
        <CommonContact />
      </div>
    )
  }
}

export {
  Purpose,
  Features,
  Es,
  Use
}
