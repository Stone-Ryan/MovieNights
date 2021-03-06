import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
} from '../actions/sessions_actions';

const _nullErrors = [];

const sessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case RECEIVE_SESSION_ERRORS:
      const errors = action.errors;
      return errors;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
