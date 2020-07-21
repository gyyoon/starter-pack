import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Button from '@/Button/Button'

import Library from './index/index'
import Video from './video/index'
import Vr from './vr/index'

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
            <Button to="/xxx">xxxx</Button>
          </li>
        </ul>

        <Switch>
          <Route path="/video">
            <Video />
          </Route>
          <Route path="/vr">
            <Vr />
          </Route>
          <Route path="/">
            <Library />
          </Route>
          <Route>
            <Library />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
