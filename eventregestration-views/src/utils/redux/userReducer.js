import {SET_APPLICATION} from './userTypes';

const initialState={
    application:{
        fullname:"",
        phone_no:"",
        email_id:"",
        id_image:"",
        regestration_type:"",
        no_tickets:""
    },
}

export const userReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_APPLICATION:return {
            ...state,
            application:action.value
        }
        default:
            return state
    }
}
