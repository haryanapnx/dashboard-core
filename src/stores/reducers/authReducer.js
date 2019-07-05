import * as actionTypes from "../constants";

const initialState = {
  auth : null,
  token:null,
  profile:null,
  isLoading:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        token: action.payload.token,
        profile:action.payload.profile
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        auth : null,
        token:null,
        profile:null
      };
    case actionTypes.AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        registered: true
      };
    case actionTypes.AUTH_SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case actionTypes.AUTH_FORGOT_SUCCESS:
      return {
        ...state,
        forgot: true
      };
    case actionTypes.AUTH_VERIFIED:
      return {
        ...state,
        verified: true
      };
    default:
      return state;
  }
};