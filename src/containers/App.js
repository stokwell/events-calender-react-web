import React, { Component, PropTypes } from 'react'
import Main from '../pages/main/Main';
import Login from '../components/login/Login';

import Dashboard from '../components/Dashboard';
import Eventsboard from '../components/Eventsboard';
import SignupPage from '../components/singup/SignupPage';

import { Switch, Route } from 'react-router-dom'

import './App.css'

export default class App extends Component {
  render() {
    return (
    <div>
      <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/anmelden" component={Login}></Route>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignupPage} />
      </Switch>
    </div>
    )
  }
}