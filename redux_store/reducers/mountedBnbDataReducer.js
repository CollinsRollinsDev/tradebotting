import * as types from '../types';

const initialState = {
    loading: false,
    mountedBnb : {},

}

export const mountedBnbReducer = (state = initialState, action) => {
    if(action.type === types.MOUNTED_BNB_DATA){
        return{
            ...state,
            loading: true,
            mountedBnb: action.payload
        }
    } else{
        return state
    }
}