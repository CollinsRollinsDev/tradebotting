import * as types from '../types';

const initialState = {
    loading: false,
    historicDataForTrade : {},

}

export const historicDataForTradeReducer = (state = initialState, action) => {
    if(action.type === types.HISTRIC_DATA_FOR_TRADE){
        return{
            ...state,
            loading: true,
            historicDataForTrade: action.payload
        }
    } else{
        return state
    }
}