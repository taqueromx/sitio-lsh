import React from 'react'

import { useAuth } from '../../context/auth-context'
import history from '../../services/history'

function SignIn(props)  {
  const { signInWithGoogle } = useAuth()

  const handleSignIn = () => {
    signInWithGoogle()
    history.push('/dashboard')
  }

    return (
      <div>
        <h1>Iniciar Sesión</h1>
        <p>Por favor accesa a tu cuenta del Tec a través de Google</p>
        <button onClick={handleSignIn}>Inicia Sesión con Google</button>
      </div>
    )
}

//  (<p>Hola, {user.displayName} con correo {user.email} </p>)
export default SignIn