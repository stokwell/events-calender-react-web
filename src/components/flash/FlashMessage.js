import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


class FlashMessage extends Component {

  static propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
  }

  onClick = () => {
    this.props.deleteFlashMessage(this.props.message.id)
  }

  render() {
    const { id, type, text } = this.props.message
    return (
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-error': type === 'error'
      })}>
        <button onClick={this.onClick} className="close"><span>&times;</span></button>
        {text}
      </div>
    );
  }
}

export default FlashMessage;
