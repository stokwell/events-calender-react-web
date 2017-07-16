import { FETCH_CATEGORIES } from '../actions/constants';

export default function categoriesReducer(state = [], action) {
  switch(action.type) {
    case FETCH_CATEGORIES:
      return  action.payload

    default:
      return state

  }
}