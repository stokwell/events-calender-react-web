import React, { Component } from 'react';
import CategoriesList from '../../categories/CategoriesList'

class EventCategories extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep()
  }
  render() {
    return (
      <div>
        <h2 className="event-description-title">Kategorien</h2>
        <CategoriesList/>
        <div className="form-group btn-group">
          <button className="btn -default" onClick={ this.props.previousStep }>Zurück</button>
          <button className="btn -primary pull-right" onClick={ this.saveAndContinue }>Speichern und Fortsetzen</button>
        </div>
      </div>
    );
  }
}

export default EventCategories;