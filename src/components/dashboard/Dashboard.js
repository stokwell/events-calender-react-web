import React, { Component } from 'react';
import Header from '../Header';
import { Switch, Link, Route } from 'react-router-dom';
import EventForm from './EventForm';
import UserEventsList from './UserEventsList';
import MultipleStepsFormWrapper from './multiple-form/MultipleStepsFormWrapper';

import './dashboard.scss'

class Dashboard extends Component {
	render() {
		return (
		  <div>
			  <Header />
			  <div className="container container--gray">
			    <h2>Dashboard</h2>
			  </div>
		      <div className="container container--nav">
		        <Link className="main-nav" to='/dashboard/your-events'>Deine Veranstaltungen</Link>
		        <Link className="main-nav" to='/dashboard/new-event'>Neue Veranstaltung</Link>
		      </div>

			  <Switch>
			    <Route path='/dashboard/new-event' component={EventForm}/>
			    <Route path='/dashboard/your-events' component={UserEventsList}/>
			    <Route path='/dashboard' component={MultipleStepsFormWrapper}/>
			  </Switch>
	      </div>
		);
	}
}

export default Dashboard;