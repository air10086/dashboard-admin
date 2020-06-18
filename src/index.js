import 'core-js/stable'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import { history } from './routerConfig'
import { Router } from 'react-router-dom'
import './style/index.scss'
import LayoutMain from './layout'
import 'normalize.css'
import './style/index.scss'

ReactDOM.render(
  <Router history={history}>
    <LayoutMain />
  </Router>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
