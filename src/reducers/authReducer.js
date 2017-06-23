import { SET_CURRENT_USER } from '../actions/constants';
import isEmpty from 'lodash/isEmpty'

const initialState = {
  isAthenticated: false,
  user: {}
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAthenticated: !isEmpty(action.user),
        user: action.user
      };

    default:
      return state

  }
}