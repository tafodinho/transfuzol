import axios from 'axios';
import config from '../../config/config';
import {
    GET_SUBSCRIBER,
    GET_SUBSCRIBERS,
    ADD_SUBSCRIBER,
    DELETE_SUBSCRIBER,
    UPDATE_SUBSCRIBER,
} from './actionTypes';

import {
    sendRequest,
} from '../../utils/api'

const getSubscribers = (data) => ({
    type: GET_SUBSCRIBERS,
    data
});

const getSubscriber = (id) => ({
    type: GET_SUBSCRIBER,
    id,
});

const updateSubscriber = (subscriber, id) => ({
    type: UPDATE_SUBSCRIBER,
    id,
    subscriber
});

const addSubscriber = (subscriber) => ({
    type: ADD_SUBSCRIBER,
    subscriber
});

const deleteSubscriber = (id) => ({
    type: DELETE_SUBSCRIBER,
    id,
});

// const subscriberRequest = (data) => async (dispatch) => {
//   // dispatch request action here
//   dispatch(subscriberRequest());
//   return axios.post(`${REQUEST_URL}auth/subscriber`, data, {})
//     .then((res) => {
//       console.log('RESPONSE', res);
//       dispatch(subscriberResponse(res.data));
//       return res;
//     }).catch((err) => {
//       // console.log('ERROR_PAYLOAD', err);
//       dispatch(subscriberFailure());
//       return err;
//     });
// };

const getSubscriberRequest = (id) => async (dispatch) => {
    // dispatch request action here
        // return await sendRequest('GET', 'subscriber_item', {
        //   id: data.id,
        // }).then(res => {
        //     dispatch(getSubscriber(res.data));
        //     return res
        // }).catch(err => {
        //     return err
        // })
        dispatch(getSubscriber(id));
};

const subscribersRequest = (data) => async (dispatch) => {
    // dispatch request action here
        return sendRequest('GET', 'subscribers', {
          ...data
        }).then(res => {
            console.log("")
            dispatch(getSubscribers(res.data.data));
            return res
        }).catch(err => {
            // dispatch(subscribersFailure());
            return err
        })
};

const addSubscriberRequest = (data) => async (dispatch) => {
    // dispatch request action here
    return sendRequest('POST', 'subscriber_item', {
        ...data
    }).then(res => {
        dispatch(addSubscriber(res.data.data));
        return res
    }).catch(err => {
        return err
    })
};


const editSubscriberRequest = (data) => async (dispatch) => {
    return sendRequest('PUT', 'subscriber_item', {
        ...data
    }).then(res => {
        dispatch(updateSubscriber(res.data.data, data.id));
        return res
    }).catch(err => {
        return err
    })
};

const deleteSubscriberRequest = (id) => async (dispatch) => {
    return sendRequest('DELETE', 'subscriber_item', {
        id
    }).then(res => {
        dispatch(deleteSubscriber(id));
        return res
    }).catch(err => {
        return err
    })
};

export { 
    getSubscriberRequest,  
    subscribersRequest,
    addSubscriberRequest,
    editSubscriberRequest,
    deleteSubscriberRequest
};
