import {
    GET_DONOR,
    GET_DONORS,
    ADD_DONOR,
    DELETE_DONOR,
    UPDATE_DONOR,
  } from './actionTypes';
  
  const initialState = {
    donors: [],
    donor: {}
  };
  
  const donorReducer = (state = initialState, action) => {
    action.type == "ADD_DONOR" && console.log("PEAVE", action)
    switch (action.type) {
        case GET_DONORS:
            return {
                ...state,
                donors: [...action.data]
            }
        case GET_DONOR:
            return {
                ...state,
                donor: state.donors.filter(donor => donor.id === action.id)[0]
            };
        case ADD_DONOR:
            return {
                ...state,
                donors: [...state.donors, action.donor]
            };
        case DELETE_DONOR:
            return {
                ...state,
                donors: state.donors.filter(donor => donor.id !== action.id)
            };
        case UPDATE_DONOR:
            return {
                ...state,
                donors: state.donors.map(donor => (
                    (donor.id === action.id) ? 
                    {...donor, ...action.donor} :
                    donor
                ))
            };
        default:
            return state;
    }
  };
  
  export default donorReducer;
  