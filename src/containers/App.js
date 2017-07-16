import React, { Component } from 'react'
import Main from '../pages/main/Main';
import LoginPage from '../components/login/LoginPage';
import Dashboard from '../components/dashboard/Dashboard';
import SignupPage from '../components/singup/SignupPage';

import requireAuth from '../utils/requireAuth';

import { Switch, Route } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
    <div>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/signup" component={SignupPage} />
        <Route path="/dashboard" component={requireAuth(Dashboard)} />
      </Switch>
    </div>
    )
  }
}