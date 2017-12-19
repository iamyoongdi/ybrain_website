import React, { Component } from 'react'
import Responsive from 'react-responsive'

import './style.css'
import CommonContact from '../CommonContact'
import { translate } from 'react-i18next'

import mainImage from '../../assets/slideimgs-technology.png'
import mainImageMobile from '../../assets/slideimgs-technology-mobile.png'
import symbolImage from '../../assets/ybrain-symbol@3x.png'

const Desktop = ({ children }) => <Responsive minWidth={768} children={children} />
const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />

class HistoryPage extends Component {
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
            <h2 className='main-container-title'>History</h2>
          </div>
          <div className='main-container-content' />
          <img className='tree-brain' alt='brain-image' src={require('../../assets/img-tree-brain.png')} />
          <div className='tech-texts'>
            <p className='tech-contents-title'>{t('history1subject')}</p>
            <p className='tech-contents-texts'>{t('history1content')}</p>
            <p className='tech-contents-title'>{t('history2subject')}</p>
            <p className='tech-contents-texts'>{t('history2content')}</p>
            <p className='tech-contents-title'>{t('history3subject')}</p>
            <p className='tech-contents-texts'>{t('history3content')}</p>
            </div>
        </div>
        <CommonContact />
      </div>
    )
  }
}

class MechanismPage extends Component {
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
            <h2 className='main-container-title'>Mechanism</h2>
          </div>
          <div className='main-container-content' />
          <img className='brain-icon' alt='brain-icon' src={require('../../assets/img-brainicon.svg')} />
          <div className='tech-text-container'>
            <p className='tech-contents-title'>{t('technologMechanismySubject1')}</p>
            <p className='tech-contents-texts'>{t('technologMechanismyContents1')}<br /><br /><font style={{color: '#465962'}}>{t('technologMechanismyContents2-1')} <br />{t('technologMechanismyContents2-2')} <br />{t('technologMechanismyContents2-3')}</font>
              <br /><br />{t('technologMechanismyContents3')}
                <br /><br />{t('technologMechanismyContents4')}
                <br /><br />{t('technologMechanismyContents5')}</p>
            <div className='brain-anatomy-container'>
              <hr className='bar' width='100%;' height='2px;' border='solid 2px' color='#00afdb' />
              <img className='brain-xray' alt='brain-xray' src={require( `../../assets${t('imageRoute')}/img-brain-xray.png`)} />
              <div className='brain-anatomy-texts'>
                <p className='brain-anatomy-title'>{t('technologMechanismySubject2')}</p>
                <p className='brain-anatomy-contents'>{t('technologMechanismyContents6')}</p>
                <p className='brain-anatomy-title'>{t('technologMechanismySubject3')} </p>
                <p className='brain-anatomy-contents'>{t('technologMechanismyContents7')}</p>
                <p className='brain-anatomy-title'>{t('technologMechanismySubject4')}</p>
                <p className='brain-anatomy-contents'>{t('technologMechanismyContents8')}</p>
                <p className='brain-anatomy-title'>{t('technologMechanismySubject5')}</p>
                <p className='brain-anatomy-contents'>{t('technologMechanismyContents9')}</p>
                <p className='brain-anatomy-title'>{t('technologMechanismySubject6')}</p>
                <p className='brain-anatomy-contents'>{t('technologMechanismyContents10')}</p>
              </div>
              <hr className='bar' width='100%' height='2px;' border='solid 2px' color='#00afdb' />
            </div>
            <div className='depression-treatment-container'>
              <p className='tech-contents-title'>{t('technologMechanismySubject7')}</p>
              <p className='tech-contents-texts'>{t('technologMechanismyContents11')}
                  <br /><br />{t('technologMechanismyContents12')}</p>
              <div className='treatment-container'>
                <div className='treatment-contents-container1'>
                  <img className='treatment-imgs' alt='medicine' src={require(`../../assets${t('imageRoute')}/img-medicine.svg`)} />
                  <p className='tech-treatment-contents'>{t('technologMechanismyContents13')}<br />{t('technologMechanismyContents14')}</p>
                </div>
                <div className='treatment-contents-container2'>
                  <img className='treatment-imgs' alt='treatment' src={require(`../../assets${t('imageRoute')}/img-treatment.svg`)} />
                  <p className='tech-treatment-contents'>{t('technologMechanismyContents15')}<br />{t('technologMechanismyContents16')}</p>
                </div>
                <div className='treatment-contents-container3'>
                  <img className='treatment-imgs' alt='non-medicine' src={require(`../../assets${t('imageRoute')}/img-non-medicine.svg`)}/>
                  <p className='tech-treatment-contents'>{t('technologMechanismyContents17')}<br />{t('technologMechanismyContents18')}</p>
                </div>
              </div>
              <p className='tech-contents-texts-bottom'>{t('technologMechanismyContents19')}</p>
            </div>
          </div>
        </div>
        <CommonContact />
      </div>
    )
  }
}

class CiraPage extends Component {
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
            <h2 className='main-container-title'>Clinical Indications & Research
              Applications</h2>
          </div>
          <div className='main-container-content' />
          <div className='cira-madrs-container'>
            <img className='cira-madrs' alt='cira-madrs-graph' src={require(`../../assets${t('imageRoute')}/madrs_expanded.svg`)} />
          </div>
          <div className='cira-result-container'>
            <div className='mards-texts-container'>
              <p className='mards-contents-text'>{t('technologyCiraContents1')}<br />{t('technologyCiraContents2')}<br />{t('technologyCiraContents3')}</p>
            </div>
            <div className='side-effect-container'>
              <img className='side-effect-table' alt='side-effect-table' src={require(`../../assets${t('imageRoute')}/img-side-effect-table.svg`)} />
              <p className='reference'>Brunoni et al., "A systematic review on reporting and assessment of adverse effects associated with transcranial direct current stimulation." Int J Neuropsychopharmacol. <br />2011 Sep;14(8):1133-45.</p>
            </div>
          </div>
        </div>
        <CommonContact />
      </div>
    )
  }
}

const History = translate('translations')(HistoryPage)
const Mechanism = translate('translations')(MechanismPage)
const Cira = translate('translations')(CiraPage)
export {
  History,
  Mechanism,
  Cira
}
