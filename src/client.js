import ReactDOM from 'react-dom'
import React from 'react'
import Main from './main'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.hydrate(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('app'))
