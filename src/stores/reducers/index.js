import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import alertReducer from './alertReducer'
import authReducer from './authReducer';
import modalReducers from './modalReducers';
import ordersReducers from './ordersReducers';


export default combineReducers({
  routerReducer,
  alert: alertReducer,
  auth: authReducer,
  modal:modalReducers,
  trip_orders:ordersReducers
});
