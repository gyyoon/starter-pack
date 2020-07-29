import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Button from '@/Button/Button'

import store from '~/store'

import Index from './index/index'
import Video from './video/index'
import Vr from './vr/index'
import TestPage from './testPage'
import NotFound from '../../error/notFound'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Button to="/">Home</Button>
          </li>
          <li>
            <Button to="/video">video</Button>
          </li>
          <li>
            <Button to="/vr">VR</Button>
          </li>
          <li>
            <Button to="/test-page">TestPage</Button>
          </li>
        </ul>

        <Switch>
          <Route path="/video" component={Video} />
          <Route path="/vr" component={Vr} />
          <Route path="/test-page" component={TestPage} />
          <Route path="/" component={Index} />
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
