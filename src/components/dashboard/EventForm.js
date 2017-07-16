import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';

import { addEvent } from '../../actions/eventsAction';
import { fetchCategories } from '../../actions/categoriesActions';



class EventForm extends Component {
  componentDidMount(){
    this.props.fetchCategories();
  }

  constructor() {
    super()
    this.state = {
       title: '',
       description: '',
       imagePreviewUrl: '',
       files: [],
       file: '',
    }
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

  handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

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

  handleSubmit = (e) => {
    e.preventDefault()
    const event = { title: this.state.title, description: this.state.description, cover: this.state.file}
    console.log(event)
    addEvent(event)
    this.setState({title:'', description:'', cover: '', imagePreviewUrl:''})
  }


	render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
        $imagePreview = (
            <div className="previewText">
                Please select an Image for Preview
            </div>
        );
    }
    console.log(this.state)
		return (
      <div className="container__new-event-form">
			<form className="new-event-form" onSubmit={this.handleSubmit}>
        <div className="dropzone">
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
          >
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>

      <aside>
          <h2>Dropped files</h2>
          <ul>
              {
                this.state.files.map(f =>
                  <li>
                    {f.name}
                    <img src={f.preview} />
                  </li>)
              }
          </ul>
      </aside>




        <div className="imgPreview">
          {$imagePreview}
        </div>

				<input
          placeholder="Name der Veranstaltung"
          type="text"
          onChange={this.handleChange}
          value={this.state.title}
          name="title"
        />

        <input
          placeholder="Kurze Beschreibung"
          type="text"
          onChange={this.handleChange}
          value={this.state.description}
          name="description"
        />
        <button>Veröffentlichen</button>
			</form>
    </div>
		);
	}
}

function mapStateToProps(state){
  return {
      categories: state.categoriesReducer
  }
}

export default connect(mapStateToProps, { fetchCategories })(EventForm);