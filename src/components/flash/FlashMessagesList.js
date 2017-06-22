import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { deleteFlashMessage } from '../../actions/flashMessages';


import FlashMessage from './FlashMessage';

class FlashMessagesList extends Component {

  static propTypes = {
    messages: PropTypes.array.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
  }

  render() {
    const messages = this.props.messages.map(message =>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage}/>
    );

    return (
      <div>{messages}</div>
    );
  }
}

function mapStateToProps(state){
  return {
    messages: state.flashMessagesReducer
  }
}

export default withRouter(connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList))
