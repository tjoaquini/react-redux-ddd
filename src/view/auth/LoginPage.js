import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import AuthPage from './AuthPage';
import { signInUser } from '../../state/auth';

class LoginPage extends Component {
  static propTypes = {
    signInUser: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  handleSuccess = () => {
    this.props.history.push('/');
  };

  render() {
    const { signInUser } = this.props;

    return (
      <AuthPage
        actionTitle="Sign In"
        onSubmit={ signInUser }
        onSuccess={ this.handleSuccess }
        renderSwitch={ () => <Link to="/register">Need an account?</Link> }
      />
    );
  }
}

const mapDispatchToProps = {
  signInUser
};

export default withRouter(connect(null, mapDispatchToProps)(LoginPage));
