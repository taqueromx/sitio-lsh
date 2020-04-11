import React from 'react'

import { useUser } from './context/user-context'

// const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'))
// const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'))
import AuthenticatedApp from './components/AuthenticatedApp'
import UnauthenticatedApp from './components/UnauthenticatedApp'

function App() {
  const user = useUser()
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App