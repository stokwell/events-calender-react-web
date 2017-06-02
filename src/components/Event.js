import React from 'react'

const Event = (props) =>  (
  <li className="event--box"> 
    {props.event.title}
  </li>

)

export default Event