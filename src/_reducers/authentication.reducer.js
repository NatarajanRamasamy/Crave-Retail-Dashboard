import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, loader: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        loader: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        loader: false
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loader: false
      };

    case userConstants.RESET_PASSWORD_REQUEST:
      return {
        user: action.user
      };
    case userConstants.RESET_PASSWORD_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.RESET_PASSWORD_FAILURE:
      return {};

    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}