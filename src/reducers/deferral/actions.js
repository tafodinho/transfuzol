import config from '../../config/config';
import {
    GET_DEFERRAL,
    GET_DEFERRALS,
    ADD_DEFERRAL,
    DELETE_DEFERRAL,
    UPDATE_DEFERRAL,
} from './actionTypes';

import {
    sendRequest,
} from '../../utils/api'

const getDeferrals = (data) => ({
    type: GET_DEFERRALS,
    data
});

const getDeferral = (id) => ({
    type: GET_DEFERRAL,
    id,
});

const updateDeferral = (deferral, id) => ({
    type: UPDATE_DEFERRAL,
    id,
    deferral
});

const addDeferral = (deferral) => ({
    type: ADD_DEFERRAL,
    deferral
});

const deleteDeferral = (id) => ({
    type: DELETE_DEFERRAL,
    id,
});

// const deferralRequest = (data) => async (dispatch) => {
//   // dispatch request action here
//   dispatch(deferralRequest());
//   return axios.post(`${REQUEST_URL}auth/deferral`, data, {})
//     .then((res) => {
//       console.log('RESPONSE', res);
//       dispatch(deferralResponse(res.data));
//       return res;
//     }).catch((err) => {
//       // console.log('ERROR_PAYLOAD', err);
//       dispatch(deferralFailure());
//       return err;
//     });
// };

const getDeferralRequest = (id) => async (dispatch) => {
    // dispatch request action here
        // return await sendRequest('GET', 'deferral_item', {
        //   id: data.id,
        // }).then(res => {
        //     dispatch(getDeferral(res.data));
        //     return res
        // }).catch(err => {
        //     return err
        // })
        dispatch(getDeferral(id));
};

const deferralsRequest = (data) => async (dispatch) => {
    // dispatch request action here
        return sendRequest('GET', 'deferrals', {
          ...data
        }).then(res => {
            console.log("")
            dispatch(getDeferrals(res.data.data));
            return res
        }).catch(err => {
            // dispatch(deferralsFailure());
            return err
        })
};

const addDeferralRequest = (data) => async (dispatch) => {
    // dispatch request action here
    return sendRequest('POST', 'deferral_item', {
        ...data
    }).then(res => {
        dispatch(addDeferral(res.data.data));
        return res
    }).catch(err => {
        return err
    })
};


const editDeferralRequest = (data) => async (dispatch) => {
    return sendRequest('PUT', 'deferral_item', {
        ...data
    }).then(res => {
        dispatch(updateDeferral(res.data.data, data.id));
        return res
    }).catch(err => {
        return err
    })
};

const deleteDeferralRequest = (id) => async (dispatch) => {
    return sendRequest('DELETE', 'deferral_item', {
        id
    }).then(res => {
        dispatch(deleteDeferral(id));
        return res
    }).catch(err => {
        return err
    })
};

export { 
    getDeferralRequest,  
    deferralsRequest,
    addDeferralRequest,
    editDeferralRequest,
    deleteDeferralRequest
};
