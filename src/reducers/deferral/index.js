import {
    GET_DEFERRAL,
    GET_DEFERRALS,
    ADD_DEFERRAL,
    DELETE_DEFERRAL,
    UPDATE_DEFERRAL,
  } from './actionTypes';
  
  const initialState = {
    deferrals: [],
    deferral: {}
  };
  
  const deferralReducer = (state = initialState, action) => {
    action.type == "ADD_DEFERRAL" && console.log("PEAVE", action)
    switch (action.type) {
        case GET_DEFERRALS:
            console.log("PIMA", action)
            return {
                ...state,
                deferrals: [...action.data]
            }
        case GET_DEFERRAL:
            return {
                ...state,
                deferral: state.deferrals.filter(deferral => deferral.id === action.id)[0]
            };
        case ADD_DEFERRAL:
            return {
                ...state,
                deferrals: [...state.deferrals, action.deferral]
            };
        case DELETE_DEFERRAL:
            return {
                ...state,
                deferrals: state.deferrals.filter(deferral => deferral.id !== action.id)
            };
        case UPDATE_DEFERRAL:
            return {
                ...state,
                deferrals: state.deferrals.map(deferral => (
                    (deferral.id === action.id) ? 
                    {...deferral, ...action.deferral} :
                    deferral
                ))
            };
        default:
            return state;
    }
  };
  
  export default deferralReducer;
  