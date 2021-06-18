import * as types from '../types';

const initialState = {
    loading: false,
    selectedTrade : {},

}

export const selectedTradeReducer = (state = initialState, action) => {
    if(action.type === types.SELECTED_TRADE){
        return{
            ...state,
            loading: true,
            selectedTrade: action.payload
        }
    } else{
        return state
    }
}