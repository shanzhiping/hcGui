import * as sel from "selectors";
import { getOmnitService } from '../rpcService/rpc';
import {
  omni_getwalletbalances, omni_listproperties, omni_getinfo, omni_getwalletaddressbalances, omni_send, omni_gettransaction, omni_gettradehistoryforpair,
  omni_gettradehistoryforaddress, omni_getCategories, omni_listtransactions, omni_sendissuancefixed, omni_sendissuancemanaged, omni_getproperty
} from '../rpcService/server';


export const GETOMNISERVICE_ATTEMPT = "GETOMNISERVICE_ATTEMPT";
export const GETOMNISERVICE_SUCCESS = "GETOMNISERVICE_SUCCESS";
export const GETOMNISERVICE_FAILED = "GETOMNISERVICE_FAILED";
export const getOmniServiceAttempt = () => (dispatch, getState) => {
  const { grpc: { address, port } } = getState();
  dispatch({ omniService: getOmnitService(sel.isTestNet(getState()), address), type: GETOMNISERVICE_SUCCESS });

  loadOmniDataAttempt(dispatch, getState);
}


const loadOmniDataAttempt = (dispatch, getState) => {
  setTimeout(() => { dispatch(listtransactions_func("*", 0)); }, 1000);
  setTimeout(() => { dispatch(getwalletaddressbalances_func()); }, 1000);
  setTimeout(() => { dispatch(listproperties_func()); }, 1000);
}

export const OMNIGETWALLETADDRESSBALANCES_ATTEMPT = "OMNIGETWALLETADDRESSBALANCES_ATTEMPT";
export const OMNIGETWALLETADDRESSBALANCES_SUCCESS = "OMNIGETWALLETADDRESSBALANCES_SUCCESS";
export const OMNIGETWALLETADDRESSBALANCES_FAILED = "OMNIGETWALLETADDRESSBALANCES_FAILED";

export const getwalletaddressbalances_func = () => async (dispatch, getState) => {

  try {
    const { omniService } = getState().rpc;
    const walletAddressBalances = await omni_getwalletaddressbalances(omniService)
    const walletAssetsBalances = new Map();
    if (walletAddressBalances) {
      for (const data of walletAddressBalances) {
        data.balances.forEach(item => {
          if (walletAssetsBalances.has(item.name)) {
            let itemData = walletAssetsBalances.get(item.name);
            itemData.balance = parseFloat(itemData.balance) + parseFloat(item.balance);
            itemData.propertyid = item.propertyid;
            itemData.addressData.push({
              address: data.address,
              balance: item.balance,
            })
            walletAssetsBalances.set(item.name, itemData);
          } else {
            let itemData = {
              name: item.name,
              balance: item.balance,
              addressData: [
                {
                  propertyid: item.propertyid,
                  address: data.address,
                  balance: item.balance,
                }
              ]
            };
            walletAssetsBalances.set(item.name, itemData);
          }
        });

      }
    }

    dispatch({ type: OMNIGETWALLETADDRESSBALANCES_SUCCESS, walletAddressBalances, walletAssetsBalances: [...walletAssetsBalances.values()] })
  } catch (error) {
    console.error(error)
    dispatch({ type: OMNIGETWALLETADDRESSBALANCES_FAILED, error })
  }

}

export const OMNILISTPROPERTIES_ATTEMPT = "OMNILISTPROPERTIES_ATTEMPT";
export const OMNILISTPROPERTIES_SUCCESS = "OMNILISTPROPERTIES_SUCCESS";
export const OMNILISTPROPERTIES_FAILED = "OMNILISTPROPERTIES_FAILED";
export const listproperties_func = () => async (dispatch, getState) => {
  try {
    const { omniService } = getState().rpc;
    const listproperties = await omni_listproperties(omniService);

    // listproperties=listproperties.map(item=>{
    //   const  property =await omni_getproperty(item.propertyid);
    //   item.detail=property
    //   return item; 
    // })

    let index = 0;
    while (index < listproperties.length) {

      const property = await omni_getproperty(omniService,{propertyid:listproperties[index].propertyid});
      listproperties[index].detail = property;
      index++;

    }

    dispatch({ type: OMNILISTPROPERTIES_SUCCESS, listproperties })
  } catch (error) {
    console.error(error);
  }
}



export const OMNIGETTRADEHISTORY_SUCCESS = "OMNIGETTRADEHISTORY_SUCCESS";
export const OMNIGETTRADEHISTORY_FAILED = "OMNIGETTRADEHISTORY_FAILED";
export const gettransaction_func = (txid) => async (dispatch, getState) => {
  try {
    const { omniService } = getState().rpc;
    const omniTransaction = await omni_gettransaction(omniService, { txid });
    dispatch({ type: OMNIGETTRADEHISTORY_SUCCESS, omniTransaction })
  } catch (error) {
    console.error(error, ' gettransaction_func  error')
    dispatch({ type: OMNIGETTRADEHISTORY_FAILED, error })
  }
}




export const OMNIGETTRADEHISTORYFORADDRESS_SUCCESS = "OMNIGETTRADEHISTORYFORADDRESS_SUCCESS";
export const OMNIGETTRADEHISTORYFORADDRESS_FAILED = "OMNIGETTRADEHISTORYFORADDRESS_FAILED";
export const gettradehistoryforaddress_func = (address) => async (dispatch, getState) => {
  try {
    const { omniService } = getState().rpc;
    const data = await omni_gettradehistoryforaddress(omniService, { address });
    dispatch({ type: OMNIGETTRADEHISTORYFORADDRESS_SUCCESS, tradeHistory: data })
  } catch (error) {
    console.error(error, ' gettradehistoryforaddress_func  error');
    dispatch({ type: OMNIGETTRADEHISTORYFORADDRESS_FAILED, error })
  }
}


export const send_func = (params) => async (dispatch, getState) => {
  try {
    const { omniService } = getState().rpc;
    await omni_send(omniService, params);
    loadOmniDataAttempt(dispatch, getState);
  } catch (error) {
    console.error(error, ' send_func  error ')
  }
}


export const OMNISENDISSUANCEFIXED_SUCCESS = "OMNISENDISSUANCEFIXED_SUCCESS";
export const OMNISENDISSUANCEFIXED_FAILED = "OMNISENDISSUANCEFIXED_FAILED";
export const sendIssuanceFixed_func = (params) => async (dispatch, getState) => {
  try {
    const { omniService } = getState().rpc;
    await omni_sendissuancefixed(omniService, params);
    dispatch({ type: OMNISENDISSUANCEFIXED_SUCCESS })
    loadOmniDataAttempt(dispatch, getState);
  } catch (error) {
    console.error(error, ' sendissuancefixed_func  error ')
    dispatch({ type: OMNISENDISSUANCEFIXED_FAILED, error })
  }
}

export const OMNISENDISSUANCEMANAGED_SUCCESS = "OMNISENDISSUANCEMANAGED_SUCCESS";
export const OMNISENDISSUANCEMANAGED_FAILED = "OMNISENDISSUANCEMANAGED_FAILED";
export const sendIssuanceManaged_func = (params) => async (dispatch, getState) => {
  try {
    const { omniService } = getState().rpc;
    await omni_sendissuancemanaged(omniService, params);
    dispatch({ type: OMNISENDISSUANCEFIXED_SUCCESS })
    loadOmniDataAttempt(dispatch, getState);
  } catch (error) {
    console.error(error, ' sendissuancemanaged_func  error ')
    dispatch({ type: OMNISENDISSUANCEMANAGED_FAILED, error })
  }
}

export const OMNILISTTRANSACTIONS_ATTEMPT = "OMNILISTTRANSACTIONS_ATTEMPT";
export const OMNILISTTRANSACTIONS_SUCCESS = "OMNILISTTRANSACTIONS_SUCCESS";
export const OMNILISTTRANSACTIONS_FAILED = "OMNILISTTRANSACTIONS_FAILED";

export const listtransactions_func = ({ txid, indexPage, callBack }) => async (dispatch, getState) => {
  try {

    const { omniService, ListTransactions, listtransactionsRequestAttempt, noMoreTransactions } = getState().rpc;
    if (listtransactionsRequestAttempt || (noMoreTransactions && indexPage != 0)) return;

    await dispatch({ type: OMNILISTTRANSACTIONS_ATTEMPT });
    const pageCount = 10;
    let list = [];

    const getListTransactions = await omni_listtransactions(omniService, { txid, count: pageCount, skip: (parseInt(indexPage) * pageCount) });


    if (indexPage == 0) {

      list = getListTransactions
    } else {
      list = ListTransactions ? [...ListTransactions, ...getListTransactions] : getListTransactions;

    }
    await dispatch({ type: OMNILISTTRANSACTIONS_SUCCESS, ListTransactions: list, noMoreTransactions: getListTransactions.length < pageCount });

    if (getListTransactions.length < 10) {
      callBack && callBack({ indexPage })
    } else {
      callBack && callBack({ indexPage: indexPage + 1 })
    }
  } catch (error) {
    console.error(error, 'listtransactions_func error')
    await dispatch({ type: OMNILISTTRANSACTIONS_FAILED, error, noMoreTransactions: true });
  }
}
export const getCategories = () => async (dispatch, getState) => {
  return omni_getCategories();
}