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
              <img className='purpose-bg' alt='patient' src={require('../../assets/contents-product-purpose.png')}/>
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
            <img classNem='feature' alt='product-feature' src={require('../../assets/imgProductFeatures.png')} />
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
