import {
    GET_HOSPITAL,
    GET_HOSPITALS,
    ADD_HOSPITAL,
    DELETE_HOSPITAL,
    UPDATE_HOSPITAL,
  } from './actionTypes';
  
  const initialState = {
    hospitals: [],
    hospital: {}
  };
  
  const hospitalReducer = (state = initialState, action) => {
    action.type == "ADD_HOSPITAL" && console.log("PEAVE", action)
    switch (action.type) {
        case GET_HOSPITALS:
            return {
                ...state,
                hospitals: [...action.data]
            }
        case GET_HOSPITAL:
            return {
                ...state,
                hospital: state.hospitals.filter(hospital => hospital.id === action.id)[0]
            };
        case ADD_HOSPITAL:
            return {
                ...state,
                hospitals: [...state.hospitals, action.hospital]
            };
        case DELETE_HOSPITAL:
            return {
                ...state,
                hospitals: state.hospitals.filter(hospital => hospital.id !== action.id)
            };
        case UPDATE_HOSPITAL:
            return {
                ...state,
                hospitals: state.hospitals.map(hospital => (
                    (hospital.id === action.id) ? 
                    {...hospital, ...action.hospital} :
                    hospital
                ))
            };
        default:
            return state;
    }
  };
  
  export default hospitalReducer;
  