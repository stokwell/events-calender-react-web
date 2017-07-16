import React, { Component } from 'react';

class Confirmation extends Component {
  render() {
    return (
      <div>
        <div className="form-group btn-group">
          <button className="btn -default" onClick={ this.props.previousStep }>Zurück</button>
          <button className="btn -primary pull-right" onClick={ this.props.handleSubmit }>Veranstaltung erstellen</button>
        </div>
      </div>
    );
  }
}
export default Confirmation;