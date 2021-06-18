import * as types from '../types';

const initialState = {
    loading: false,
    userDetails : {},

}

export const userDetailsReducer = (state = initialState, action) => {
    if(action.type === types.GET_USER_DETAILS){
        return{
            ...state,
            loading: true,
            userDetails: action.payload
        }
    } else{
        return state
    }
}