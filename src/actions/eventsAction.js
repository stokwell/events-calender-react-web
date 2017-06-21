import axios from 'axios';

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