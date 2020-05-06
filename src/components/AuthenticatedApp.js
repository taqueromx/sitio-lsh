import React from 'react'
import { Router } from 'react-router-dom'

import history from '../services/history'
import Routes from '../routes/auth'

import GlobalStyles from '../styles/global'

import Navbar from './auth/Navbar'

function AuthenticatedApp() {
    return (
        <Router history={history}>
        <Navbar />
        <Routes/>
        <GlobalStyles />
        </Router>
    )
}

export default AuthenticatedApp