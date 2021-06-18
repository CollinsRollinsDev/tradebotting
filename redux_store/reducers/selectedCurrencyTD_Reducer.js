import * as types from '../types';

const initialState = {
    loading: false,
    selectedCurrency : {},

}

export const selectedCurrencyTD_Reducer = (state = initialState, action) => {
    if(action.type === types.SELECTED_CURRENCY_TD){
        return{
            ...state,
            loading: true,
            selectedCurrency: action.payload
        }
    } else{
        return state
    }
}