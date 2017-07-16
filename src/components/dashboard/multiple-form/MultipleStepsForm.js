import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


import EventFields from './EventFields';
import EventCover from './EventCover';
import EventCategories from './EventCategories';
import Confirmation from './Confirmation';

import { addEvent } from '../../../actions/eventsAction';

class MultipleStepsForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      title: '',
      description: '',
      imagePreviewUrl: '',
      file: '',
      category_id: 5
    };
  }

  onDrop = (files) => {
    const file = files[0]

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        file: reader.result,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  nextStep = () => {
    this.setState({
      step : this.state.step + 1
    })
  }

  previousStep = () => {
    this.setState({
      step: this.state.step - 1
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const event = { title: this.state.title, description: this.state.description, cover: this.state.file,  category_id: this.state.category_id }
    console.log(event)
    addEvent(event)

        this.props.history.push('/');

    this.setState({title:'', description:'', cover: '', imagePreviewUrl:''})
  }


  render() {
    switch (this.state.step) {
      case 1:
        return <EventFields
                  title={this.state.title}
                  description={this.state.description}
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                />
      case 2:
        return <EventCover
                  nextStep={this.nextStep}
                  previousStep={this.previousStep}
                  onDrop={this.onDrop}
                  imagePreviewUrl={this.state.imagePreviewUrl}
                />
      case 3:
        return <EventCategories
                  nextStep={this.nextStep}
                  previousStep={this.previousStep}
                />
      case 4:
        return <Confirmation
                  handleSubmit={this.handleSubmit}
                  previousStep={this.previousStep}
                />
    }
  }
}

export default withRouter(MultipleStepsForm);