import * as types from '../types';

const initialState = {
    loading: false,
    selectedInterval : {},

}

export const selectedIntervalTD_Reducer = (state = initialState, action) => {
    if(action.type === types.SELECTED_INTERVAL_TD){
        return{
            ...state,
            loading: true,
            selectedInterval: action.payload
        }
    } else{
        return state
    }
}