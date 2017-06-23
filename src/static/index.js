import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../containers/App'
import configureStore from '../store/configureStore'
import { BrowserRouter as Router} from 'react-router-dom'

import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from '../actions/loginActions';

const store = configureStore(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)