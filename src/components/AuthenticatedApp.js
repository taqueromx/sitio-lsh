import React from 'react'
import { Router } from 'react-router-dom'

import history from '../services/history'
import Routes from '../routes'

import GlobalStyles from "../styles/global"

function AuthenticatedApp() {

    return (
        <Router history={history}>
        <Routes/>
        <GlobalStyles />
        </Router>
    )
}

export default AuthenticatedApp


// import { useAuth } from '../context/auth-context'
// const { signOut } = useAuth()
// <h1>You're Authenticated</h1>
// <button onClick={signOut}>Sign Out</button>