import {
    GETOMNISERVICE_ATTEMPT,GETOMNISERVICE_SUCCESS,GETOMNISERVICE_FAILED,OMNIGETWALLETADDRESSBALANCES_SUCCESS,OMNIGETWALLETADDRESSBALANCES_FAILED
    ,OMNILISTPROPERTIES_SUCCESS
  } from "../actions/OmniActions";

export default function rpc(state = {}, action) {
    switch (action.type) {
        case GETOMNISERVICE_ATTEMPT:
            return{
                ...state,
                getOmniServiceError: "",
                getOmniServiceRequestAttempt: true,
            };
        case GETOMNISERVICE_FAILED:
            return {
                ...state,
                getOmniServiceError: String(action.error),
                getOmniServiceRequestAttempt: false,
            };
        case GETOMNISERVICE_SUCCESS: 
            return {
                ...state,
                getOmniServiceError: null,
                getOmniServiceRequestAttempt: false,
                omniService: action.omniService,
            };
        case OMNIGETWALLETADDRESSBALANCES_SUCCESS:
            return {
                ...state,
                walletAddressBalances:action.walletAddressBalances,
                walletAssetsBalances:action.walletAssetsBalances,
                getWalletAddressBalancesRequestAttempt:false
            }
        case OMNIGETWALLETADDRESSBALANCES_FAILED:
            return {
                ...state,
                getWalletAddressBalancesRequestError: String(action.error),
                getWalletAddressBalancesRequestAttempt:true
            }
        case OMNILISTPROPERTIES_SUCCESS:
            return{
                ...state,
                listproperties:action.listproperties, 
                listpropertiesRequestAttempt:false
            }
        default:
            return state; 
    }
}