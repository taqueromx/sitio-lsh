import React from 'react'

import { useAuth } from '../context/auth-context'

function UnauthenticatedApp(props) {
    const { signInWithGoogle } = useAuth()

    return (
        <div>
            <h1>Not Authenticated</h1>
            <button onClick={signInWithGoogle}>Inicia Sesión</button>
        </div>

    )
}

export default UnauthenticatedApp