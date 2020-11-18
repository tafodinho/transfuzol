import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from './actionTypes';
  
  const initialState = {
    loading: false,
    success: false,
    errorMessage: '',
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          errorMessage: 'loading...',
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          errorMessage: '',
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          success: false,
          errorMessage: 'Login Error',
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  