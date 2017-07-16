import React, { Component } from 'react';

class EventFields extends Component {

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep()
  }

  render() {
    return (
      <form>
        <div className="form-body">
          <h2 className="event-description-title">Informationen zur Veranstaltung</h2>
          <div className="form-group">
            <label>Titel der Veranstaltung</label>
            <input
              type="text"
              onChange={this.props.handleChange}
              value={this.props.title}
              name="title"
            />
          </div>

          <div className="form-group">
            <label>Kurze Beschreibung</label>
            <input
              type="text"
              onChange={this.props.handleChange}
              value={this.props.description}
              name="description"
            />
          </div>
        </div>

        <div className="form-group btn-group">
          <button className="btn -primary pull-right" onClick={ this.saveAndContinue }>Speichern & Fortsetzen</button>
        </div>

      </form>
    );
  }
}

export default EventFields;