// @flow  
import { get } from 'lodash'
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  // AUTH_FORGOT_SUCCESS,
  AUTH_REGISTER_SUCCESS,
  // AUTH_RESEND_SUCCESS,
  AUTH_SET_LOADING
} from "../constants";

import { apiCall } from "../../utils/services";
import {setSuccessMessage} from './alertAction'
import { modalToggle } from './index';

export function setLoading(loading: boolean) {
  return {
    type: AUTH_SET_LOADING,
    payload: loading 
  }
}

export const login = (email:string, password:string) => async dispatch => {
  dispatch(setLoading(true))
  const dataReq = {
    method: "POST",
    url: "/authentication/login",
    data: {
      data: {
        email: email,
        password: password,
      }
    }
  };
  const res = await dispatch(apiCall(dataReq));
  if (get(res, 'status') === 200) {
    dispatch(setLoading(false))
    dispatch(setSuccessMessage(get(res, 'message')))
    dispatch({
      type: AUTH_LOGIN_SUCCESS,
      payload: res.logged_in
    });
    window.location.assign('/home')
    return res;
  }
  return res;
};

export const logout = () => dispatch => {
  dispatch({type: AUTH_LOGOUT});
  dispatch(setSuccessMessage('Logout Berhasil'))
  window.location.assign('/')
};

export const register = (email:string, password:string) => async dispatch => {
  dispatch(setLoading(true))
  const dataReq = {
    method: "POST",
    url: "/authentication/register",
    data: {
      data: {
        email: email,
        password: password,
      }
    }
  };
  const res = await dispatch(apiCall(dataReq));
  if (get(res, 'status') === 201) {
    dispatch(setLoading(false))
    dispatch(setSuccessMessage(get(res, 'message')))
    dispatch({
      type: AUTH_REGISTER_SUCCESS,
      payload: res.logged_in
    });
    window.location.assign('/')
    dispatch(modalToggle(true, get(res, 'message'),'Successfully'))
    return res;
  }
  return res;
};
