import React from 'react';
import Event from './Event';
import CategoriesList from './categories/CategoriesList';


const EventsList = ({events}) => (
  <div>
    <div>
      <CategoriesList />
    </div>
  	<div className="container container--events">
  		<ul className="events--list">
  			{events.map(event => <Event event={event}  key={event.id}/> )}
  		</ul>
  	</div>
  </div>
);

export default EventsList;
