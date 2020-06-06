import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import About from '../../components/not_auth/About'
import Dashboard from '../../components/auth/Dashboard'
import newProject from '../../components/auth/newProject'
import newGuia from '../../components/auth/newGuia'
import newLider from '../../components/auth/newLider'

import '../../styles/styleFormP.scss'; 


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/newProject" component={newProject} />
      <Route path="/newGuia" component={newGuia} />
      <Route path="/newLider" component={newLider} />
      {/* <Route path="/profile" component={Profile} /> */}

      {/* redirect user to Dashboard if route does not exist */}
      <Route component={Dashboard} />
    </Switch>
  );
}
