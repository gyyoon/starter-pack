import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import cookie from 'js-cookie'

import Button from '@/Button/Button'
import { useTranslation } from 'react-i18next'
import '~/config/i18n'

import store from '~/store'

import Index from './index/index'
import Video from './video/index'
import Vr from './vr/index'
import TestPage from './testPage'
import NotFound from '../../error/notFound'

const App: React.FC = () => {
  const [t, i18next] = useTranslation(['myLibrary', 'common'])
  const [lang, setLang] = useState(i18next.language)

  useEffect(() => {
    i18next.changeLanguage(lang)
  }, [lang, i18next])

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Button to="/">{t('common:Home')}</Button>
          </li>
          <li>
            <Button to="/video">{t('common:Video')}</Button>
          </li>
          <li>
            <Button to="/vr">{t('common:VR')}</Button>
          </li>
          <li>
            <Button to="/test-page">{t('common:TestPage')}</Button>
          </li>
        </ul>
        <p>{t('I18 next')}</p>
        <Button
          handleClick={() => {
            setLang(() => {
              const nextLang = lang === 'en' ? 'zh' : 'en'
              cookie.set('lang', nextLang)
              return nextLang
            })
          }}
        >
          {t('Change language')}
        </Button>

        <Switch>
          <Route path="/video" component={Video} />
          <Route path="/vr" component={Vr} />
          <Route path="/test-page" component={TestPage} />
          <Route exact path="/" component={Index} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
