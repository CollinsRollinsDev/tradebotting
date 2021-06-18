import { combineReducers } from 'redux';
import { userDetailsReducer } from './userDetailsReducer';
import { mountedBtcReducer } from './mountedBtcDataReducer';
import { mountedEthReducer } from './mountedEthDataReducer';
import { mountedBnbReducer } from './mountedBnbDataReducer';
import { selectedTradeReducer } from './selectedTradeReducer';
import { historicDataForTradeReducer } from './historicDataForTrade';
import { selectedIntervalTD_Reducer } from './selectedIntervalTD_Reducer';
import { selectedCurrencyTD_Reducer } from './selectedCurrencyTD_Reducer';

export default combineReducers({
    user: userDetailsReducer,
    mountedBtcReducer: mountedBtcReducer,
    mountedEthReducer : mountedEthReducer,
    mountedBnbReducer : mountedBnbReducer,
    selectedTradeReducer : selectedTradeReducer,
    historicDataForTradeReducer : historicDataForTradeReducer,
    selectedIntervalTD_Reducer : selectedIntervalTD_Reducer,
    selectedCurrencyTD_Reducer : selectedCurrencyTD_Reducer
})