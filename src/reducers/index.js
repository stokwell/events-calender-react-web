import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import flashMessagesReducer from './flashMessagesReducer'


export default combineReducers({
  flashMessagesReducer,
  eventsReducer
})