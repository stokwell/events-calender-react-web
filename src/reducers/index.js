import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import flashMessagesReducer from './flashMessagesReducer'
import authReducer from './authReducer'



export default combineReducers({
  flashMessagesReducer,
  eventsReducer,
  authReducer
})