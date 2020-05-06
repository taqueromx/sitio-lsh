import React from 'react'

import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'

import { useUser } from './context/user-context'

// const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'))
// const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'))
import AuthenticatedApp from './components/AuthenticatedApp'
import UnauthenticatedApp from './components/UnauthenticatedApp'

function App() {
  const user = useUser()
  return user ? <ThemeProvider theme={theme}><AuthenticatedApp /></ThemeProvider> :
                <ThemeProvider theme={theme}><UnauthenticatedApp /></ThemeProvider>
}

export default App