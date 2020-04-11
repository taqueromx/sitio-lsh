import React from 'react'
import { Router } from 'react-router-dom'

import Routes from '../routes/not_auth'
import history from '../services/history'

import GlobalStyles from '../styles/global'

function UnauthenticatedApp() {
    return (
        <Router history={history}>
            <Routes/>
            <GlobalStyles />
        </Router>
    )
}


export default UnauthenticatedApp