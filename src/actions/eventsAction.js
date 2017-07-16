import axios from 'axios';

import { FETCH_USER_EVENTS, DELETE_USER_EVENTS } from './constants';

const URL = 'http://localhost:3000/api/events';

export function fetchEvents(){
	const request = axios.get(URL);

	return(dispatch) => {
		request.then((response) => dispatch({
			type: 'FETCH_EVENTS', payload: response.data })
		)
	}
}

export function addEvent(event){
  const request = axios.post(URL, { event: event });

}

export function fetchUserEvents(user) {
  const request = axios.get(`http://localhost:3000/api/users/${user}/events`)
  return(dispatch) => {
    request.then((response)=> dispatch({
      type: FETCH_USER_EVENTS, payload: response.data
    }))
  }
}


export function deleteUserEvent(event){
  const request = axios.delete(`http://localhost:3000/api/events/${event}`)
  return(dispatch) => {
    request.then((response)=> dispatch({
      type: DELETE_USER_EVENT, payload: response.data
    }))
  }
}