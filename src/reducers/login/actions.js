import axios from 'axios';
import config from '../../config/config';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './actionTypes';
// import { expireSession } from '../userProfile/profileActions';

const REQUEST_URL = `${config.api.URL}`;

const makeRequest = () => ({
  type: LOGIN_REQUEST,
});

const getResponse = (res) => ({
  type: LOGIN_SUCCESS,
  res,
});

const getFailure = () => ({
  type: LOGIN_FAILURE,
});

const login = (data) => async (dispatch) => {
  // dispatch request action here
  dispatch(makeRequest());
  return axios.post(`${REQUEST_URL}api/auth/login`, data)
    .then((res) => {
      console.log('RESPONSE', res);
      dispatch(getResponse(res.data));
      localStorage.setItem('auth_token', JSON.stringify(res.data.auth_token));
      localStorage.setItem('isAuth', 'true');
      return res;
    }).catch((err) => {
      // console.log('ERROR_PAYLOAD', err);
      dispatch(getFailure());
      return err;
    });
};

const logout = () => {
  localStorage.clear();
  localStorage.setItem('isAuth', 'false');
  return true;
};

export { login, logout };
