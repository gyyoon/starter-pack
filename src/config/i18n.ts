import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

// language files
import commonEn from '~/locales/en/common.json'
import myLibraryEn from '~/locales/en/myLibrary.json'

import commonZh from '~/locales/zh/common.json'
import myLibraryZh from '~/locales/zh/myLibrary.json'

const defaultOptions = {
  // LanguageDetector
  order: ['querystring', 'cookie', 'localStorage'],
  lookupQuerystring: 'lang',
  lookupCookie: 'lang',
  lookupLocalStorage: 'i18nextLng',
  // default
  fallbackLng: 'en',
  ns: ['common', 'myLibrary'],
  defaultNS: 'common',
  resources: {
    en: {
      common: commonEn,
      myLibrary: myLibraryEn,
    },
    zh: {
      common: commonZh,
      myLibrary: myLibraryZh,
    },
  },
}

i18n.use(LanguageDetector).use(initReactI18next).init(defaultOptions)

export default i18n
