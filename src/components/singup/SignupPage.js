import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignUpRequest } from '../../actions/signupActions'

import SignupForm from './SignupForm';

import './signup.css'


class SignupPage extends Component {

  static propTypes = {
    userSignUpRequest: PropTypes.func.isRequired
  }

  render() {
    const { userSignUpRequest } = this.props
    return (
      <div className="signup">
        <SignupForm userSignUpRequest={userSignUpRequest}/>
      </div>
    );
  }
}



export default connect((state) => {return {} }, { userSignUpRequest })(SignupPage);