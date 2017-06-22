const initialState = {
  events: []
}

export default function eventsReducer (state = initialState, action) {
  switch(action.type) {
    default:
      return state

    case 'FETCH_EVENTS':
      return { ...state, events: action.payload }

  }
}