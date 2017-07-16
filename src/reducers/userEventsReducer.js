import { FETCH_USER_EVENTS } from '../actions/constants';

const initialState = {
  userEvents: []
}

export default function userEventsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER_EVENTS:
      return {...state, userEvents: action.payload }


    default:
      return state

  }
}