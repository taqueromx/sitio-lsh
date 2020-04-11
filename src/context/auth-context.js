import React from 'react'

import withAuth from '../utils/Auth'

import FullPageSpinner from '../components/FullPageSpinner'

const AuthContext = React.createContext()

function newAuthProvider(props) {
  const { user, signOut, signInWithGoogle, loading } = props
  
  if (loading) {
    return <FullPageSpinner />
  }

  return (
    <AuthContext.Provider value={{user, signInWithGoogle, signOut}} {...props} />
  )
}

const AuthProvider = withAuth(newAuthProvider)

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth debe ser usado con un componente AuthProvider`)
  }
  return context
}

export {AuthProvider, useAuth}
