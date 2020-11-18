import config from '../../config/config';
import {
    GET_HOSPITAL,
    GET_HOSPITALS,
    ADD_HOSPITAL,
    DELETE_HOSPITAL,
    UPDATE_HOSPITAL,
} from './actionTypes';

import {
    sendRequest,
} from '../../utils/api'

const getHospitals = (data) => ({
    type: GET_HOSPITALS,
    data
});

const getHospital = (id) => ({
    type: GET_HOSPITAL,
    id,
});

const updateHospital = (hospital, id) => ({
    type: UPDATE_HOSPITAL,
    id,
    hospital
});

const addHospital = (hospital) => ({
    type: ADD_HOSPITAL,
    hospital
});

const deleteHospital = (id) => ({
    type: DELETE_HOSPITAL,
    id,
});

// const hospitalRequest = (data) => async (dispatch) => {
//   // dispatch request action here
//   dispatch(hospitalRequest());
//   return axios.post(`${REQUEST_URL}auth/hospital`, data, {})
//     .then((res) => {
//       console.log('RESPONSE', res);
//       dispatch(hospitalResponse(res.data));
//       return res;
//     }).catch((err) => {
//       // console.log('ERROR_PAYLOAD', err);
//       dispatch(hospitalFailure());
//       return err;
//     });
// };

const getHospitalRequest = (id) => async (dispatch) => {
    // dispatch request action here
        // return await sendRequest('GET', 'hospital_item', {
        //   id: data.id,
        // }).then(res => {
        //     dispatch(getHospital(res.data));
        //     return res
        // }).catch(err => {
        //     return err
        // })
        dispatch(getHospital(id));
};

const hospitalsRequest = (data) => async (dispatch) => {
    // dispatch request action here
        return sendRequest('GET', 'hospitals', {
          ...data
        }).then(res => {
            console.log("")
            dispatch(getHospitals(res.data.data));
            return res
        }).catch(err => {
            // dispatch(hospitalsFailure());
            return err
        })
};

const addHospitalRequest = (data) => async (dispatch) => {
    // dispatch request action here
    return sendRequest('POST', 'hospital_item', {
        ...data
    }).then(res => {
        dispatch(addHospital(res.data.data));
        return res
    }).catch(err => {
        return err
    })
};


const editHospitalRequest = (data) => async (dispatch) => {
    return sendRequest('PUT', 'hospital_item', {
        ...data
    }).then(res => {
        dispatch(updateHospital(res.data.data, data.id));
        return res
    }).catch(err => {
        return err
    })
};

const deleteHospitalRequest = (id) => async (dispatch) => {
    return sendRequest('DELETE', 'hospital_item', {
        id
    }).then(res => {
        dispatch(deleteHospital(id));
        return res
    }).catch(err => {
        return err
    })
};

export { 
    getHospitalRequest,  
    hospitalsRequest,
    addHospitalRequest,
    editHospitalRequest,
    deleteHospitalRequest
};
