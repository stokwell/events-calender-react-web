import React from 'react';

const Event = (props) =>  (
  <li className="event--box"> 
    <p>{props.event.title}</p>
    <p>{props.event.description}</p>
  </li>
)

export default Event;