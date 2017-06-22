import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignUpRequest } from '../../actions/signupActions'
import { addFlashMessage } from '../../actions/flashMessages'

import SignupForm from './SignupForm';

import './signup.css'


class SignupPage extends Component {

  static propTypes = {
    userSignUpRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }

  render() {
    const { userSignUpRequest, addFlashMessage } = this.props
    return (
      <div className="signup">
        <SignupForm userSignUpRequest={userSignUpRequest} addFlashMessage={addFlashMessage}/>
      </div>
    );
  }
}



export default connect((state) => {return {} }, { userSignUpRequest, addFlashMessage })(SignupPage);