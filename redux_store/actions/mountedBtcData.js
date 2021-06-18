import * as types from '../types';

export const updateMountedBtcData  = (payload) => async dispatch => {
    dispatch({
        type: types.MOUNTED_BTC_DATA,
        payload: payload
    })
}