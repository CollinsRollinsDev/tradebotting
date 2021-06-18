import * as types from '../types';

const initialState = {
    loading: false,
    mountedEth : {},

}

export const mountedEthReducer = (state = initialState, action) => {
    if(action.type === types.MOUNTED_ETH_DATA){
        return{
            ...state,
            loading: true,
            mountedEth: action.payload
        }
    } else{
        return state
    }
}