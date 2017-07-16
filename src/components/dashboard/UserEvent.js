import React, { Component } from 'react';

class UserEvent extends Component {

  handleDeleteClick = (e) => {
    const eventId = this.props.event.id
    this.props.deleteUserEvent(eventId)
  }

  render() {
    return (
      <li className="event--box">
        <div className="btn-box">
          <button className="btn btn-edit" onClick={this.handleEditClick}>Edit</button>
          <button className="btn btn-delete" onClick={this.handleDeleteClick}>Delete</button>
        </div>
        <img src={`http://localhost:3000/${this.props.event.cover.url}`} alt="cover"/>
        <p>{this.props.event.title}</p>
        <p>{this.props.event.description}</p>
      </li>
    )
  }
}


export default UserEvent;