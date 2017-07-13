import React, { Component } from 'react'
import Responsive from 'react-responsive'

import './style.css'
import CommonContact from '../CommonContact'

import mainImage from '../../assets/slideimgs-technology.png'
import mainImageMobile from '../../assets/slideimgs-technology-mobile.png'
import symbolImage from '../../assets/ybrain-symbol@3x.png'

const Desktop = ({ children }) => <Responsive minWidth={768} children={children} />
const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />

class History extends Component {
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
            <h2 className='main-container-title'>History</h2>
          </div>
          <div className='main-container-content' />
            <img className='tree-brain' alt='brain-image' src={require('../../assets/img-tree-brain.png')} />
            <div className='tech-texts'>
              <p className='tech-contents-title'>우울증의 원인이 되는 부위</p>
              <p className='tech-contents-texts'>많은 연구와 의학계의 보고에 따르면, 외관 상 우리의 이마쪽에 해당하는 뇌 부위 즉, 전두엽 부분에서 우울증을 야기한다는 것이 과학적으로 밝혀졌습니다.</p>
              <p className='tech-contents-title'>미세한 전류 자극의 효과</p>
              <p className='tech-contents-texts'>우리의 뇌 부위에 흘려보내는 미세한 전류자극의 효과는 이집트와 그리스 같은 고대 유럽권 문명에서도 자주 언급된 기술입니다. 이전에는 전기 뱀장어와 같은 자연적인 소재를 통해 전기를 적용했고, 이를 두통과 같은 질환에 치료 목적으로 사용되었던 사례들도 고대 문헌에 언급되어 왔습니다.</p>
              <p className='tech-contents-title'>전기적 비약물요법으로 하는 우울증 치료</p>
              <p className='tech-contents-texts'>근래의 과학 발전과 함께 1800년대부터 미세한 전기 자극이 뇌 신경 조절에 유용하다는 것이 밝혀졌습니다. 이처럼 미세한 전기는 각 질환과 관련된 주요 뇌 부위에 적용함으로써 뇌 기능의 정상화에 효과를 보입니다.<br /><br />와이브레인은 이러한 기술을 바탕으로 한 MINDD라는 기기를 통해 직접적인 약물 복용을 하지 않아도 그와 동일한 수준의 우울증 치료의 효과를얻을 수 있다는 대규모 임상 실험 결과를 가지고  이를 한번 더 입증할 수 있었습니다.</p>
            </div>
        </div>
        <CommonContact />
      </div>
    )
  }
}




class Mechanism extends Component {
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
            <h2 className='main-container-title'>Mechanism</h2>
          </div>
          <div className='main-container-content' />
            <img className='brain-icon' alt='brain-icon' src={require('../../assets/img-brainicon.svg')} />
            <div className='tech-text-container'>
              <p className='tech-contents-title'>우울증이란?</p>
              <p className='tech-contents-texts'>심각한 우울증환자는 다음과 같이 호소합니다.<br /><br /><font style={{color:'#465962'}}>“정말 어둠 속에서 발목이 사슬에 붙잡힌 채, <br />가슴에 거대한 쇳덩이를 매달고 고꾸라질 것 같은 몸을 억지로 추스르며 <br />공포에 떤 채로 걷는 것 같다.”</font>
                <br /><br />우울증에 동반되는 증상들은 식욕이나 성욕 저하와 같은 기본적인 생활에 지장을 줄 뿐만 아니라 기억력이나 집중력 감퇴와 같은 인지 능력 저하, 그리고 호르몬과 면역 체계 불균형과 같은 신체 기능 악화까지도 영향을 미칩니다.
                <br /><br />일반적으로 마음의 감기라고 알려진 우울증은 감기라는 말처럼 다양한 인지 및 정신적, 신체적 증상으로 일상 기능의 저하를 일으키는 질환으로 생물학 / 심리학 / 사회적 다방면에 걸친 원인으로 인해 발병합니다.
                <br /><br />뇌의 거름이라고 알려져 있는 신경전달물질이나 감정, 스트레스 제어와 관련있는 여러가지 뇌 부위에서 제대로 된 작동을 못해서특정한 스트레스에도 견딜 수 없는 큰 괴로움이 지속되는 것으로 알려져 있습니다. 이에 따라 사람들은 민감해지고, 불편한 감정을 느끼거나 우울감을 느끼게 됩니다</p>
              <div className='brain-anatomy-container'>
                <hr className='bar' width="830px;" height="2px;" border="solid 2px" color="#00afdb" align="center"></hr>
                <img className='brain-xray' alt='brain-xray' src={require('../../assets/img-brain-xray.png')}/>
                <div className='brain-anatomy-texts'>
                  <p className='brain-anatomy-title'>•	생화학적 / 환경적 요인들로 인한 </p>
                  <p className='brain-anatomy-contents'>: 뇌 항상성 유지 실패 및 호르몬 불균형 유발</p>
                  <p className='brain-anatomy-title'>•	신경 전달물질 조절 작용 문제 </p>
                  <p className='brain-anatomy-contents'>: 뇌 기능 조절 및 감정 제어 실패</p>
                  <p className='brain-anatomy-title'>•	좌 / 우측 전전두엽의 비대칭화 </p>
                  <p className='brain-anatomy-contents'>: 스트레스와 불편한 상황에 고착화</p>
                  <p className='brain-anatomy-title'>•	전대상피질, 편도체의 과활성화 </p>
                  <p className='brain-anatomy-contents'>: 감정 제어 문제</p>
                  <p className='brain-anatomy-title'>•	해마 / 시상하부 등의 비활성화 </p>
                  <p className='brain-anatomy-contents'>: 수면, 기억력 저하</p>
                </div>
                <hr className='bar' width="830px;" height="2px;" border="solid 2px" color="#00afdb" align="center"></hr>
              </div>
              <div className='depression-treatment-container'>
                <p className='tech-contents-title'>우울증 치료</p>
                <p className='tech-contents-texts'>우울증은 치료가 충분히 가능한 질병입니다. 그러나 일시적인 감정으로 받아들여 오랜시간 방관하게 되거나
                  <br />사회적인 시선과 편견때문에 본인 스스로 위축되는 일들이 많아 스트레스가 쌓이게 되고 뇌 기능은 더욱 저하됩니다. 이에 따라 우울증은 스스로 치유할 수 없는 상태의 중증으로 악화됩니다.
                  <br /><br />따라서 상황이 더 악화되기 전에 주변의 도움은 물론, 정신건강 전문가의 조언에 따라 우울증을 치료하고 관리하는 것이 매우 중요합니다. 심리적 상태와 우울증의 유형에 따라 의사선생님은 항우울제나 수면제와 같은 약물 치료부터 상담치료나 심리치료와 같은 다양한 방법의 치료를 진행합니다.</p>
                <div className='img-treatment-container'>
                  <img className='treatment-imgs' alt='medicine' src={require('../../assets/img-medicine.svg')} />
                  <img className='treatment-imgs' alt='treatment' src={require('../../assets/img-treatment.svg')} />
                  <img className='treatment-imgs' alt='non-medicine' src={require('../../assets/img-non-medicine.svg')} />
                </div>
                <div className='treatment-texts-container'>
                  <p className='tech-treatment-contents'>• 	생물학적 관점 <br />• 	신경 호르몬 불균형 치료 중점</p>
                  <p className='tech-treatment-contents'>• 	심리학적 관점 <br />• 	심리적 및 사회적 요소 해소 중점</p>
                  <p className='tech-treatment-contents'>• 	신경생리학적 관점 <br />• 	비정상적 신경활동 재활 중점</p>
                </div>
                <p className='tech-contents-texts-bottom'>하지만 전적으로 약물에 의존하는 접근은 지나친 의존성과 부작용 등으로 인해 보다 건강한 치료로서는 한계를 보이기도 합니다. tDCS의 미세한 전류자극을 통한 물리적인 치료는 이러한 약물 치료가 가진 부작용을 최소화하는 동시에 증상을 완화하는 효과가 있습니다.</p>
              </div>  
            </div>
        </div>
        <CommonContact />
      </div>
    )
  }
}




class Cira extends Component {
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
            <h2 className='main-container-title'>Clinical Indications & Research
              Applications</h2>
          </div>
          <div className='main-container-content' />
            <div className='cira-madrs-container'>
              <img className='cira-madrs' alt='cira-madrs-graph' src={require('../../assets/madrs_expanded.svg')}/>
              <div className='mards-texts-container'>
                <p className='mards-contents-title'>	[ Ybrain tDCS 임상실험 진행 ]</p>
                <p className='mards-contents-text'>	•    첫 2주간 매일 약 30분 미세한 전기자극 적용 <br />	•    이 후 각 2주 1회로 횟수를 줄여서 자극 적용 <br />	•    7개 주요대학병원과 약 96명의 환자 통해 임상 진행</p>
              </div>
            </div>
            <div className='cira-result-container'>
              <div className='side-effect-container'>
                <img className='side-effect-graph' alt='side-effect-graph' src={require('../../assets/img-rate-graph.svg')}/>
                <img className='side-effect-table' alt='side-effect-table' src={require('../../assets/imgside-effect-table.svg')}/>
              </div>
              <div className='mards-texts-container'>
                <p className='mards-contents-title'>	[ Ybrain tDCS 임상실험 결과 ]</p>
                <p className='mards-contents-text'>	•    우울증을 유발하는 주요부위의 활동 정상화 <br />	•    대규모 임상을 통해 입증된 항우울제와 동등한 효과 입증 <br />	•    약물에 비해 적은 부작용으로 더 큰 효과 확인</p>
              </div>
            </div>
          </div>
        <CommonContact />
      </div>
    )
  }
}

export {
  History,
  Mechanism,
  Cira
}
