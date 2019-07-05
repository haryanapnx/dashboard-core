
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './stores/reducers';

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware))
)