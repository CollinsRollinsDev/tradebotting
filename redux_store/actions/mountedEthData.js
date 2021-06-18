import * as types from '../types';

export const updateMountedEthData = (payload) => async dispatch => {
    dispatch({
        type: types.MOUNTED_ETH_DATA,
        payload: payload
    })
}