import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class EventCover extends Component {

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep()
  }

  render() {
    let {imagePreviewUrl} = this.props;
    let dropzoneStyles = {
      width: '100%',
      minHeight: '200',
      borderWidth: 2,
      borderColor: 'rgb(102, 102, 102)',
      borderStyle: 'dashed',
      borderRadius: 5,
      padding:20
    }
    return (
      <div>
        <h2 className="event-description-title">Plakat für Veranschtaltung</h2>
        <Dropzone
          onDrop={this.props.onDrop}
          multiple={false}
          style={dropzoneStyles}
        >
          <p>Try dropping some files here, or click to select files to upload.</p>
          <div className="coverPreview">
            {imagePreviewUrl && <img src={imagePreviewUrl} />}
          </div>
        </Dropzone>

        <div className="form-group btn-group">
          <button className="btn -default" onClick={ this.props.previousStep }>Zurück</button>
          <button className="btn -primary pull-right" onClick={ this.saveAndContinue }>Speichern & Fortsetzen</button>
        </div>
      </div>
    );
  }
}

export default EventCover;