import * as types from '../types';

export const updateSelectedIntervalTD  = (payload) => async dispatch => {
    dispatch({
        type: types.SELECTED_INTERVAL_TD,
        payload: payload
    })
}