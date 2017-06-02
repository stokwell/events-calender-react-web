import React from 'react';
import Event from './Event';


const EventsList = ({events}) => (
	<div className="container container--events">
		<ul className="events--list">
			{events.map(event => <Event event={event}  key={event.id}/> )}
		</ul>
	</div>
);

export default EventsList;
