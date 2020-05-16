import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import About from '../../components/not_auth/About'
import DashboardSelect from '../../components/auth/DashboardSelect'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={DashboardSelect} />
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={DashboardSelect} />
      {/* <Route path="/profile" component={Profile} /> */}

      {/* redirect user to Dashboard if route does not exist */}
      <Route component={DashboardSelect} />
    </Switch>
  );
}
