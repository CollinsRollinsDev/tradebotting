import * as types from '../types';

const initialState = {
    loading: false,
    mountedBtc : {},

}

export const mountedBtcReducer = (state = initialState, action) => {
    if(action.type === types.MOUNTED_BTC_DATA){
        return{
            ...state,
            loading: true,
            mountedBtc: action.payload
        }
    } else{
        return state
    }
}