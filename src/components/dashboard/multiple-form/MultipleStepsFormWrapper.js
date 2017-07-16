import React, { Component } from 'react';
import MultipleStepsForm from './MultipleStepsForm'

class MultipleStepsFormWrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="multipleStepForm">
          <MultipleStepsForm />
        </div>
      </div>
    );
  }
}

export default MultipleStepsFormWrapper;