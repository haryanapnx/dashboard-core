import * as actionTypes from "../constants";
import Alert from 'react-s-alert';

const initialState = {
  show: false,
  message: null,
  type: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALERT_ERROR:
      Alert.error(action.payload.message, {
          position: action.payload.position || 'top-right',
          effect: 'stackslide',
          timeout: action.payload.timeout || 5000,
          offset: 72
      });
      return {
        ...state,
        show: true,
        type: "error",
        message: action.payload.message
      };
    case actionTypes.ALERT_SUCCESS:
      Alert.success(action.payload.message, {
          position: action.payload.position || 'top-right',
          effect: 'stackslide',
          timeout: action.payload.timeout || 5000,
          offset: 72
      });
      return {
        ...state,
        show: true,
        type: "success",
        message: action.payload.message
      };
    case actionTypes.ALERT_WARNING:
      return {
        ...state,
        show: true,
        type: "warning",
        message: action.payload.message
      };
    case actionTypes.ALERT_REMOVE:
      return {
        show: false
      };
    default:
      return state;
  }
};
