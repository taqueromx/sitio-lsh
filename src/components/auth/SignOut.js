import React from 'react'

import { useAuth } from '../../context/auth-context'
import history from '../../services/history'

function SignOut() {
    const { signOut } = useAuth()

    const handleSignOut = () => {
        try {
            signOut()
          }
          catch (e) {
              console.log(e)
          }
          finally {
            history.push('/')
          }
    }

    return <>{handleSignOut()}</>
}

export default SignOut