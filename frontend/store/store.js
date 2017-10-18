import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers/root_reducer';
// import sessionReducer from '../reducers/session_reducer';

const configureStore = ( preloadedState = {} ) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;
