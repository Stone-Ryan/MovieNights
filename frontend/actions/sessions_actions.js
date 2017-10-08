import * as APIUtil from '../util/sessions_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

//sync actions

export const receiveCurrentUser = currentUser => ({
  type: 'RECEIVE_CURRENT_USER',
  currentUser,
});

export const receiveSessionErrors = errors => ({
  type: 'RECEIVE_SESSION_ERRORS',
  errors,
});

//async actions

export const signup = user => dispatch => (
  return APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveSessionErrors(error.responeJSON));
  );
);

export const signin = user => dispatch => (
  return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    error =>dispatch(receiveSessionErrors(error.responeJSON));
  );
);

export const logout = () => dispatch => (
  return APIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null))
  )
);
