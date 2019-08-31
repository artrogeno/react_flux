import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './app/app'

import 'assets/scss/app.scss'

const appRouter = <Router><Route component={App} /></Router>

ReactDOM.render(appRouter, document.getElementById('root'))
