import React, { Component } from 'react';
import { connect } from  'react-redux';
import { fetchUserEvents, deleteUserEvent } from '../../actions/eventsAction';

import UserEvent from './UserEvent'


class UserEventsList extends Component {

  componentDidMount(){
    const { user } = this.props.user
    this.props.fetchUserEvents(user.user_id)
  }

  render() {
    const userEvents = this.props.userEvents.userEvents
    return (
      <div className="container container--user_events">
        <ul className="events--list">
           {userEvents.map(event =>
            <UserEvent
              event={event}
              key={event.id}
              deleteUserEvent={this.props.deleteUserEvent}
            /> )}
        </ul>
      </div>
    );
  }
}

function mapStateToprops(state){
  return {
    user: state.authReducer,
    userEvents: state.userEventsReducer,
  }
}

export default connect(mapStateToprops, { fetchUserEvents, deleteUserEvent })(UserEventsList);