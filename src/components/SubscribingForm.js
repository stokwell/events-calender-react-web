import React, { Component } from 'react';

import { createSubscribing } from '../actions/subscribingActions';

class SubscribingForm extends Component {


    state = {
    	email: ''
    }

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }


	handleSubmit = (e) => {
      e.preventDefault();
      const email = this.state.email
      createSubscribing(email)
      this.setState({email: ''})
	}

	render() {
		return (
  			<footer>
			    <div className="container">
			       <h3>Newsletters abonieren</h3>
			       <div>
			       		<form onSubmit={ this.handleSubmit }>
			       			<input 
			       			  type="email" 
			       			  placeholder="Ihre E-Mail Adresse"
			       			  value={this.state.email} 
			       			  onChange={this.handleChange} 
			       			  name="email" />
			       			<button>Subscribe</button>
			       		</form>
			       </div>
			    </div>
			</footer>		
		);
	}
}
export default SubscribingForm;