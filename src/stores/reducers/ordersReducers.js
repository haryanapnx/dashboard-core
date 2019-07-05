import * as actionTypes from "../constants";

const initialState = {
  orders : [],
  from:null,
  to:[],
  sla:[],
  package_order:[],
  payment:null,
  userSender:null,
  isLoading:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        from: action.payload.address_from,
        to: action.payload.address_to,
        sla: action.payload.sla,
        package_order: action.payload.package,
        payment: action.payload.payment,
        userSender: action.payload.userSender,
      };
    
    case actionTypes.LOADING_ORDERS:
      return {
        ...state,
        isLoading: action.bool
      };
    default:
      return state;
  }
};