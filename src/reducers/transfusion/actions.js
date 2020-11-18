import config from '../../config/config';
import {
    GET_TRANSFUSION,
    GET_TRANSFUSIONS,
    ADD_TRANSFUSION,
    DELETE_TRANSFUSION,
    UPDATE_TRANSFUSION,
} from './actionTypes';

import {
    sendRequest,
} from '../../utils/api'

const getTransfusions = (data) => ({
    type: GET_TRANSFUSIONS,
    data
});

const getTransfusion = (id) => ({
    type: GET_TRANSFUSION,
    id,
});

const updateTransfusion = (transfusion, id) => ({
    type: UPDATE_TRANSFUSION,
    id,
    transfusion
});

const addTransfusion = (transfusion) => ({
    type: ADD_TRANSFUSION,
    transfusion
});

const deleteTransfusion = (id) => ({
    type: DELETE_TRANSFUSION,
    id,
});

// const transfusionRequest = (data) => async (dispatch) => {
//   // dispatch request action here
//   dispatch(transfusionRequest());
//   return axios.post(`${REQUEST_URL}auth/transfusion`, data, {})
//     .then((res) => {
//       console.log('RESPONSE', res);
//       dispatch(transfusionResponse(res.data));
//       return res;
//     }).catch((err) => {
//       // console.log('ERROR_PAYLOAD', err);
//       dispatch(transfusionFailure());
//       return err;
//     });
// };

const getTransfusionRequest = (id) => async (dispatch) => {
    // dispatch request action here
        // return await sendRequest('GET', 'transfusion_item', {
        //   id: data.id,
        // }).then(res => {
        //     dispatch(getTransfusion(res.data));
        //     return res
        // }).catch(err => {
        //     return err
        // })
        dispatch(getTransfusion(id));
};

const transfusionsRequest = (data) => async (dispatch) => {
    // dispatch request action here
        return sendRequest('GET', 'transfusions', {
          ...data
        }).then(res => {
            console.log("")
            dispatch(getTransfusions(res.data.data));
            return res
        }).catch(err => {
            // dispatch(transfusionsFailure());
            return err
        })
};

const addTransfusionRequest = (data) => async (dispatch) => {
    // dispatch request action here
    return sendRequest('POST', 'transfusion_item', {
        ...data
    }).then(res => {
        dispatch(addTransfusion(res.data.data));
        return res
    }).catch(err => {
        return err
    })
};


const editTransfusionRequest = (data) => async (dispatch) => {
    return sendRequest('PUT', 'transfusion_item', {
        ...data
    }).then(res => {
        dispatch(updateTransfusion(res.data.data, data.id));
        return res
    }).catch(err => {
        return err
    })
};

const deleteTransfusionRequest = (id) => async (dispatch) => {
    return sendRequest('DELETE', 'transfusion_item', {
        id
    }).then(res => {
        dispatch(deleteTransfusion(id));
        return res
    }).catch(err => {
        return err
    })
};

export { 
    getTransfusionRequest,  
    transfusionsRequest,
    addTransfusionRequest,
    editTransfusionRequest,
    deleteTransfusionRequest
};
