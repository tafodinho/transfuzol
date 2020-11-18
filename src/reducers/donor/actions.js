import config from '../../config/config';
import {
    GET_DONOR,
    GET_DONORS,
    ADD_DONOR,
    DELETE_DONOR,
    UPDATE_DONOR,
} from './actionTypes';

import {
    sendRequest,
} from '../../utils/api'

const getDonors = (data) => ({
    type: GET_DONORS,
    data
});

const getDonor = (id) => ({
    type: GET_DONOR,
    id,
});

const updateDonor = (donor, id) => ({
    type: UPDATE_DONOR,
    id,
    donor
});

const addDonor = (donor) => ({
    type: ADD_DONOR,
    donor
});

const deleteDonor = (id) => ({
    type: DELETE_DONOR,
    id,
});

// const donorRequest = (data) => async (dispatch) => {
//   // dispatch request action here
//   dispatch(donorRequest());
//   return axios.post(`${REQUEST_URL}auth/donor`, data, {})
//     .then((res) => {
//       console.log('RESPONSE', res);
//       dispatch(donorResponse(res.data));
//       return res;
//     }).catch((err) => {
//       // console.log('ERROR_PAYLOAD', err);
//       dispatch(donorFailure());
//       return err;
//     });
// };

const getDonorRequest = (id) => async (dispatch) => {
    // dispatch request action here
        // return await sendRequest('GET', 'donor_item', {
        //   id: data.id,
        // }).then(res => {
        //     dispatch(getDonor(res.data));
        //     return res
        // }).catch(err => {
        //     return err
        // })
        dispatch(getDonor(id));
};

const donorsRequest = (data) => async (dispatch) => {
    // dispatch request action here
        return sendRequest('GET', 'donors', {
          ...data
        }).then(res => {
            console.log("")
            dispatch(getDonors(res.data.data));
            return res
        }).catch(err => {
            // dispatch(donorsFailure());
            return err
        })
};

const addDonorRequest = (data) => async (dispatch) => {
    // dispatch request action here
    return sendRequest('POST', 'donor_item', {
        ...data
    }).then(res => {
        dispatch(addDonor(res.data.data));
        return res
    }).catch(err => {
        return err
    })
};


const editDonorRequest = (data) => async (dispatch) => {
    return sendRequest('PUT', 'donor_item', {
        ...data
    }).then(res => {
        dispatch(updateDonor(res.data.data, data.id));
        return res
    }).catch(err => {
        return err
    })
};

const deleteDonorRequest = (id) => async (dispatch) => {
    return sendRequest('DELETE', 'donor_item', {
        id
    }).then(res => {
        dispatch(deleteDonor(id));
        return res
    }).catch(err => {
        return err
    })
};

export { 
    getDonorRequest,  
    donorsRequest,
    addDonorRequest,
    editDonorRequest,
    deleteDonorRequest
};
