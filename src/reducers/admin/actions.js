import config from '../../config/config';
import {
    GET_ADMIN,
    GET_ADMINS,
    ADD_ADMIN,
    DELETE_ADMIN,
    UPDATE_ADMIN,
} from './actionTypes';

import {
    sendRequest,
} from '../../utils/api'

const getAdmins = (data) => ({
    type: GET_ADMINS,
    data
});

const getAdmin = (id) => ({
    type: GET_ADMIN,
    id,
});

const updateAdmin = (admin, id) => ({
    type: UPDATE_ADMIN,
    id,
    admin
});

const addAdmin = (admin) => ({
    type: ADD_ADMIN,
    admin
});

const deleteAdmin = (id) => ({
    type: DELETE_ADMIN,
    id,
});

// const adminRequest = (data) => async (dispatch) => {
//   // dispatch request action here
//   dispatch(adminRequest());
//   return axios.post(`${REQUEST_URL}auth/admin`, data, {})
//     .then((res) => {
//       console.log('RESPONSE', res);
//       dispatch(adminResponse(res.data));
//       return res;
//     }).catch((err) => {
//       // console.log('ERROR_PAYLOAD', err);
//       dispatch(adminFailure());
//       return err;
//     });
// };

const getAdminRequest = (id) => async (dispatch) => {
    // dispatch request action here
        // return await sendRequest('GET', 'admin_item', {
        //   id: data.id,
        // }).then(res => {
        //     dispatch(getAdmin(res.data));
        //     return res
        // }).catch(err => {
        //     return err
        // })
        dispatch(getAdmin(id));
};

const adminsRequest = (data) => async (dispatch) => {
    // dispatch request action here
        return sendRequest('GET', 'admins', {
          ...data
        }).then(res => {
            console.log("")
            dispatch(getAdmins(res.data.data));
            return res
        }).catch(err => {
            // dispatch(adminsFailure());
            return err
        })
};

const addAdminRequest = (data) => async (dispatch) => {
    // dispatch request action here
    return sendRequest('POST', 'auth/register', {
        ...data
    }).then(res => {
        console.log("EX", res)
        dispatch(addAdmin(res.data.data));
        return res
    }).catch(err => {
        return err
    })
};


const editAdminRequest = (data) => async (dispatch) => {
    return sendRequest('PUT', 'admin_item', {
        ...data
    }).then(res => {
        dispatch(updateAdmin(res.data.data, data.id));
        return res
    }).catch(err => {
        return err
    })
};

const deleteAdminRequest = (id) => async (dispatch) => {
    return sendRequest('DELETE', 'admin_item', {
        id
    }).then(res => {
        dispatch(deleteAdmin(id));
        return res
    }).catch(err => {
        return err
    })
};

export { 
    getAdminRequest,  
    adminsRequest,
    addAdminRequest,
    editAdminRequest,
    deleteAdminRequest
};
