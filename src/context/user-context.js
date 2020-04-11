import React from 'react'

import { useAuth } from './auth-context'

const UserContext = React.createContext()

// the UserProvider in user-context.js is basically:
const UserProvider = props => (
  <UserContext.Provider value={useAuth().user} {...props}  />
)
// and the useUser hook is basically this:
const useUser = () => React.useContext(UserContext)

export {UserProvider, useUser}
