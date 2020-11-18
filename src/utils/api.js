/* eslint-disable no-console */
import axios from 'axios';
import config from '../config/config';
// import { expireSession } from '../reducers/userProfile/profileActions';
// import { logout } from '../reducers/login/loginActions';

const baseURL = `${config.api.URL}api/`;

const dataMethod = localStorage.getItem('dataMethod');

const sendRequest = async (method, url, data) => {
  if (dataMethod !== 'random') {
    const token = JSON.parse(localStorage.getItem('auth_token'));

    const result = await axios({
      method,
      baseURL,
      url,
      data: { ...data },
      headers: {
        'Authorization': `Bearer ${token}`
      },
      responseType: 'json',
    });
    console.log("RESULT", result)
    return result;
  }
  return {};
};

// const getRequest = async (url, data) => {
//   const token = JSON.parse(localStorage.getItem('auth_token'));
//   const result = await axios.get(`${baseURL}${url}`, {
//     params: { ...data, token },
//   });

//   return result;
// };

// const sendRequestNoToken = async (method, url, data) => {
//   const result = await axios({
//     method,
//     baseURL,
//     url,
//     data,
//   });

//   return result;
// };

// const handleError = (error, dispatch) => {
//   if (error.response) {
//     const { data, status, headers } = error.response;
//     console.log('Response data', data);
//     console.log('Response status', status);
//     console.log('Response headers', headers);

//     if (status === 401) {
//       dispatch(expireSession(true));
//       logout();
//     }
//   } else if (error.request) {
//     console.log('Error request', error.request);
//   } else {
//     console.log('Error message', error.message);
//   }
//   console.log('Error config', error.config);
// };

export {
  sendRequest,
//   getRequest,
//   handleError,
//   sendRequestNoToken,
};
