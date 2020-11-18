import {
    GET_DONATION,
    GET_DONATIONS,
    ADD_DONATION,
    DELETE_DONATION,
    UPDATE_DONATION,
  } from './actionTypes';
  
  const initialState = {
    donations: [],
    donation: {}
  };
  
  const donationReducer = (state = initialState, action) => {
    action.type == "ADD_DONATION" && console.log("PEAVE", action)
    switch (action.type) {
        case GET_DONATIONS:
            return {
                ...state,
                donations: [...action.data]
            }
        case GET_DONATION:
            return {
                ...state,
                donation: state.donations.filter(donation => donation.id === action.id)[0]
            };
        case ADD_DONATION:
            return {
                ...state,
                donations: [...state.donations, action.donation]
            };
        case DELETE_DONATION:
            return {
                ...state,
                donations: state.donations.filter(donation => donation.id !== action.id)
            };
        case UPDATE_DONATION:
            return {
                ...state,
                donations: state.donations.map(donation => (
                    (donation.id === action.id) ? 
                    {...donation, ...action.donation} :
                    donation
                ))
            };
        default:
            return state;
    }
  };
  
  export default donationReducer;
  