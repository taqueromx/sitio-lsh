import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import About from '../../components/not_auth/About'
import MainApp from '../../components/auth/MainApp'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MainApp} />
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={MainApp} />
      {/* <Route path="/profile" component={Profile} /> */}

      {/* redirect user to Dashboard if route does not exist */}
      <Route component={MainApp} />
    </Switch>
  );
}
