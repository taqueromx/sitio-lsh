import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import Home from '../../components/not_auth/Home'
import SignIn from '../../components/not_auth/SignIn'
import About from '../../components/not_auth/About'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/about" component={About} />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Home} />
    </Switch>
  );
}
