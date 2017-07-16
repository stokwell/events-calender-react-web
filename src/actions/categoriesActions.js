import axios from 'axios';

import { FETCH_CATEGORIES } from './constants';

export function fetchCategories(){
  const request = axios.get('http://localhost:3000/api/categories');
  return(dispatch) => {
    request.then((response) => dispatch({
      type: FETCH_CATEGORIES, payload: response.data })
    )
  }
}