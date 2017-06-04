import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../containers/App'
import configureStore from '../store/configureStore'
import { BrowserRouter as Router} from 'react-router-dom'

const store = configureStore(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)