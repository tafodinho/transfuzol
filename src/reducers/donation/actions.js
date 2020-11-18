import config from '../../config/config';
import {
    GET_DONATION,
    GET_DONATIONS,
    ADD_DONATION,
    DELETE_DONATION,
    UPDATE_DONATION,
} from './actionTypes';

import {
    sendRequest,
} from '../../utils/api'

const getDonations = (data) => ({
    type: GET_DONATIONS,
    data
});

const getDonation = (id) => ({
    type: GET_DONATION,
    id,
});

const updateDonation = (donation, id) => ({
    type: UPDATE_DONATION,
    id,
    donation
});

const addDonation = (donation) => ({
    type: ADD_DONATION,
    donation
});

const deleteDonation = (id) => ({
    type: DELETE_DONATION,
    id,
});

// const donationRequest = (data) => async (dispatch) => {
//   // dispatch request action here
//   dispatch(donationRequest());
//   return axios.post(`${REQUEST_URL}auth/donation`, data, {})
//     .then((res) => {
//       console.log('RESPONSE', res);
//       dispatch(donationResponse(res.data));
//       return res;
//     }).catch((err) => {
//       // console.log('ERROR_PAYLOAD', err);
//       dispatch(donationFailure());
//       return err;
//     });
// };

const getDonationRequest = (id) => async (dispatch) => {
    // dispatch request action here
        // return await sendRequest('GET', 'donation_item', {
        //   id: data.id,
        // }).then(res => {
        //     dispatch(getDonation(res.data));
        //     return res
        // }).catch(err => {
        //     return err
        // })
        dispatch(getDonation(id));
};

const donationsRequest = (data) => async (dispatch) => {
    // dispatch request action here
        return sendRequest('GET', 'donations', {
          ...data
        }).then(res => {
            console.log("")
            dispatch(getDonations(res.data.data));
            return res
        }).catch(err => {
            // dispatch(donationsFailure());
            return err
        })
};

const addDonationRequest = (data) => async (dispatch) => {
    // dispatch request action here
    return sendRequest('POST', 'donation_item', {
        ...data
    }).then(res => {
        dispatch(addDonation(res.data.data));
        return res
    }).catch(err => {
        return err
    })
};


const editDonationRequest = (data) => async (dispatch) => {
    return sendRequest('PUT', 'donation_item', {
        ...data
    }).then(res => {
        dispatch(updateDonation(res.data.data, data.id));
        return res
    }).catch(err => {
        return err
    })
};

const deleteDonationRequest = (id) => async (dispatch) => {
    return sendRequest('DELETE', 'donation_item', {
        id
    }).then(res => {
        dispatch(deleteDonation(id));
        return res
    }).catch(err => {
        return err
    })
};

export { 
    getDonationRequest,  
    donationsRequest,
    addDonationRequest,
    editDonationRequest,
    deleteDonationRequest
};
