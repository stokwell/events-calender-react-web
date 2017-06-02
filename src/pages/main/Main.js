import React, { Component, PropTypes } from 'react';
import { connect } from  'react-redux';

import EventsList from '../../components/EventsList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './Main.scss';

class Main extends Component {
  render() {
    return (
  		<div>
  		  <Header/>
  		  <div className="container container--gray">
  		    <h2>Veranstaltungskalender</h2>
  		  </div>
        <div className="container container--nav">           
        </div>
        <EventsList events={this.props.events}/>

        <Footer/>
  		</div>
    ) 
  }
}

function mapStateToProps(state) {
  return {
    events: state.eventsReducer
  }
}


export default connect(mapStateToProps)(Main)