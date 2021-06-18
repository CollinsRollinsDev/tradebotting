import * as types from '../types';

export const updateHistoricDateForTrade  = (payload) => async dispatch => {
    dispatch({
        type: types.HISTRIC_DATA_FOR_TRADE,
        payload: payload
    })
}