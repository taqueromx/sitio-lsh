import React, { Component, useState } from 'react';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './components/Home';
// import Chat from './pages/Chat';
// import Signup from './pages/Signup';
import Login from './components/Login';
import { auth } from './services/firebase';

// These we care about
import './App.css'
import withAuth from './utils/Auth'

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/chat' />}
    />
  )
}

function App(props) {
  const [loading, setLoading] = useState(true)

  return this.state.loading === true ? <h2>Loading...</h2> : (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <PrivateRoute path="/chat" authenticated={props.user} component={Chat}></PrivateRoute>
        {/* <PublicRoute path="/signup" authenticated={props.user} component={Signup}></PublicRoute> */}
        <PublicRoute path="/login" authenticated={props.user} component={Login}></PublicRoute>
      </Switch>
    </Router>
  );
}

export default withAuth(App)