import * as actionTypes from "../constants";

const initialState = {
  isOpen: false,
  body: '',
  title:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MODAL_SHOW:
      return {
        ...state,
        isOpen: action.payload.bool,
        body: action.payload.body,
        title: action.payload.title,
      };
    default:
      return state;
  }
};