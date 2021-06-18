import * as types from '../types';

export const updateMountedBnbData  = (payload) => async dispatch => {
    dispatch({
        type: types.MOUNTED_BNB_DATA,
        payload: payload
    })
}