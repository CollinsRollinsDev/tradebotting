import * as types from '../types';

export const updateSelectedCurrencyTD = (payload) => async dispatch => {
    dispatch({
        type: types.SELECTED_CURRENCY_TD,
        payload: payload
    })
}