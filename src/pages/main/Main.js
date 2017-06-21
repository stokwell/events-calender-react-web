import React, { Component, PropTypes } from 'react';

import EventsList from '../../components/EventsList';
import SubscribingForm from '../../components/SubscribingForm';
import Header from '../../components/Header';

import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEvents } from '../../actions/eventsAction';


import './Main.scss';

class Main extends Component {
  componentDidMount(){
    this.props.fetchEvents()
  }


  render() {
    return (
  		<div>
  		  <Header/>
  		  <div className="container container--gray">
  		    <h2>Veranstaltungskalender</h2>
  		  </div>
        <div className="container container--nav">
        </div>

        <EventsList events={this.props.events.events}/>

        <SubscribingForm />
  		</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.eventsReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchEvents}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

