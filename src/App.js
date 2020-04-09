import React from 'react'
import './App.css'
import withAuth from './utils/Auth'

function App(props)  {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = props
    return (
      <div className="App">
        <header className="App-header">
          {
            user 
              ? <p>Hola, {user.displayName} con correo {user.email} </p>
              : <p>Please sign in.</p>
          }
          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
      </div>
    )
}

export default withAuth(App)