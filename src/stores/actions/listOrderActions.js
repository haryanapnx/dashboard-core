import { get } from 'lodash'
import { SET_ORDERS, LOADING_ORDERS } from "../constants";
import { apiCall } from "../../utils/services";

export function setLoading(loading: boolean) {
  return {
    type: LOADING_ORDERS,
    payload: loading 
  }
}

export const getOrderList = (token:string) => async dispatch => {
  dispatch(setLoading(true))
  const dataReq = {
    method: "GET",
    url: "/triplogistic/order",
    data: {
      headers:{AUTHENTICATION:`Bearer ${token}`}
    }
  };
  const res = await dispatch(apiCall(dataReq));
  if (get(res, 'status') === 200) {
    dispatch({
      type: SET_ORDERS,
      payload: res.triplogistic_orders
    });
    dispatch(setLoading(false))
    return res;
  }
  return res;
};