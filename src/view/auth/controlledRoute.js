/* @flow */
import React, { type ComponentType } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  isAuthenticated: bool,
  component: ComponentType<any>,
  [string]: any
};

const _PrivateRoute = ({ isAuthenticated, component: Component, ...props }: Props) => (
  <Route
    {...props}
    render={ () => isAuthenticated ? <Component {...props} /> : <Redirect to="/login" /> }
  />
);

const _PublicOnlyRoute = ({ isAuthenticated, component: Component, ...props }: Props) => (
  <Route
    {...props}
    render={ () => !isAuthenticated ? <Component {...props} /> : <Redirect to="/" /> }
  />
);

const mapStateToProps = ({ user }) => ({
  isAuthenticated: Boolean(user)
});

export const PrivateRoute = connect(mapStateToProps)(_PrivateRoute);
export const PublicOnlyRoute = connect(mapStateToProps)(_PublicOnlyRoute);
