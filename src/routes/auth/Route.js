import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import AuthLayout from '../../styles/AuthLayout'

export default function RouteWrapper({
  component: Component,
  ...rest
}) {
  const Layout = AuthLayout
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
