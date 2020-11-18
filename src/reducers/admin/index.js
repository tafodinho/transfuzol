import {
    GET_ADMIN,
    GET_ADMINS,
    ADD_ADMIN,
    DELETE_ADMIN,
    UPDATE_ADMIN,
  } from './actionTypes';
  
  const initialState = {
    admins: [],
    admin: {}
  };
  
  const adminReducer = (state = initialState, action) => {
    action.type == "ADD_ADMIN" && console.log("PEAVE", action)
    switch (action.type) {
        case GET_ADMINS:
            console.log("PIMA", action)
            return {
                ...state,
                admins: [...action.data]
            }
        case GET_ADMIN:
            return {
                ...state,
                admin: state.admins.filter(admin => admin.id === action.id)[0]
            };
        case ADD_ADMIN:
            return {
                ...state,
                admins: [...state.admins, action.admin]
            };
        case DELETE_ADMIN:
            return {
                ...state,
                admins: state.admins.filter(admin => admin.id !== action.id)
            };
        case UPDATE_ADMIN:
            return {
                ...state,
                admins: state.admins.map(admin => (
                    (admin.id === action.id) ? 
                    {...admin, ...action.admin} :
                    admin
                ))
            };
        default:
            return state;
    }
  };
  
  export default adminReducer;
  