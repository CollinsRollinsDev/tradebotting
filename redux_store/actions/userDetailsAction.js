import * as types from '../types';

export const updatingUserDetails = (payload) => async dispatch => {
    dispatch({
        type: types.GET_USER_DETAILS,
        payload: payload
    })
}