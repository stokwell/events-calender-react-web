import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import flashMessagesReducer from './flashMessagesReducer';
import authReducer from './authReducer';
import userEventsReducer from './userEventsReducer';
import categoriesReducer from './categoriesReducer';



export default combineReducers({
  flashMessagesReducer,
  eventsReducer,
  userEventsReducer,
  authReducer,
  categoriesReducer
})