import {
    GET_SUBSCRIBER,
    GET_SUBSCRIBERS,
    ADD_SUBSCRIBER,
    DELETE_SUBSCRIBER,
    UPDATE_SUBSCRIBER,
  } from './actionTypes';
import actions from 'redux-form/lib/actions';
  
  const initialState = {
    subscribers: [],
    subscriber: {}
  };
  
  const subscriberReducer = (state = initialState, action) => {
    action.type == "ADD_SUBSCRIBER" && console.log("PEAVE", action)
    switch (action.type) {
        case GET_SUBSCRIBERS:
            return {
                ...state,
                subscribers: [...action.data]
            }
        case GET_SUBSCRIBER:
            return {
                ...state,
                subscriber: state.subscribers.filter(subscriber => subscriber.id === action.id)[0]
            };
        case ADD_SUBSCRIBER:
            return {
                ...state,
                subscribers: [...state.subscribers, action.subscriber]
            };
        case DELETE_SUBSCRIBER:
            return {
                ...state,
                subscribers: state.subscribers.filter(subscriber => subscriber.id !== action.id)
            };
        case UPDATE_SUBSCRIBER:
            return {
                ...state,
                subscribers: state.subscribers.map(subscriber => (
                    (subscriber.id === action.id) ? 
                    {...subscriber, ...action.subscriber} :
                    subscriber
                ))
            };
        default:
            return state;
    }
  };
  
  export default subscriberReducer;
  