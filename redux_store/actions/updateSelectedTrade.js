import * as types from '../types';

export const updateSelectedTrade  = (payload) => async dispatch => {
    dispatch({
        type: types.SELECTED_TRADE,
        payload: payload
    })
}