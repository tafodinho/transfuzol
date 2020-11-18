import {
    GET_TRANSFUSION,
    GET_TRANSFUSIONS,
    ADD_TRANSFUSION,
    DELETE_TRANSFUSION,
    UPDATE_TRANSFUSION,
  } from './actionTypes';
  
  const initialState = {
    transfusions: [],
    transfusion: {}
  };
  
  const transfusionReducer = (state = initialState, action) => {
    action.type == "ADD_TRANSFUSION" && console.log("PEAVE", action)
    switch (action.type) {
        case GET_TRANSFUSIONS:
            return {
                ...state,
                transfusions: [...action.data]
            }
        case GET_TRANSFUSION:
            return {
                ...state,
                transfusion: state.transfusions.filter(transfusion => transfusion.id === action.id)[0]
            };
        case ADD_TRANSFUSION:
            return {
                ...state,
                transfusions: [...state.transfusions, action.transfusion]
            };
        case DELETE_TRANSFUSION:
            return {
                ...state,
                transfusions: state.transfusions.filter(transfusion => transfusion.id !== action.id)
            };
        case UPDATE_TRANSFUSION:
            return {
                ...state,
                transfusions: state.transfusions.map(transfusion => (
                    (transfusion.id === action.id) ? 
                    {...transfusion, ...action.transfusion} :
                    transfusion
                ))
            };
        default:
            return state;
    }
  };
  
  export default transfusionReducer;
  