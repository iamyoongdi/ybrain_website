import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import KRResource from './../string/KR'
import ENResource from './../string/EN'

const options = {
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  }
}
options.resources = {
  en: {
    translations: ENResource
  },
  kr: {
    translations: KRResource
  }
}

export default () => {
  i18n
    .use(LanguageDetector)
    .init(options)
  return i18n
}
