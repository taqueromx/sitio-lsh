import React from 'react'
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom'

import DefaultLayout from '../../styles/DefaultLayout'

export default function RouteWrapper({
  component: Component,
  user,
  ...rest
}) {
  const Layout = DefaultLayout

  /**
   * Redirect user to the desired route.
   */
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}