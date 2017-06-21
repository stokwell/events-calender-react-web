import React from 'react';

const Event = (props) =>  (
    <li className="event--box">
        <img src={`http://localhost:3000/${props.event.cover.url}`} alt="cover"/>
        <p>{props.event.title}</p>
        <p>{props.event.description}</p>
    </li>
)

export default Event;