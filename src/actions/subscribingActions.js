import axios from 'axios';

const URL = 'http://localhost:3000/api/subscribings';

export function createSubscribing(email){
	const request = axios.post(URL, {subscribing: {email: email} })
}