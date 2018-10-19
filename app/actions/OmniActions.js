import * as sel from "selectors";
import {getOmnitService} from '../rpcService/rpc';
import {omni_getwalletbalances,omni_listproperties, omni_getinfo,omni_getwalletaddressbalances} from '../rpcService/server';
 
//新增 Omni服务  存放于 rpc Store中
export const GETOMNISERVICE_ATTEMPT = "GETOMNISERVICE_ATTEMPT";
export const GETOMNISERVICE_SUCCESS = "GETOMNISERVICE_SUCCESS";
export const GETOMNISERVICE_FAILED = "GETOMNISERVICE_FAILED";
export const getOmniServiceAttempt = () => (dispatch,getState)=>{ 
  const { grpc: { address, port } } = getState(); 
  dispatch({omniService:getOmnitService(sel.isTestNet(getState()),address),type:GETOMNISERVICE_SUCCESS});

  setTimeout(() => { dispatch(getwalletaddressbalances()); }, 1000);
}

export const OMNIGETWALLETADDRESSBALANCES_ATTEMPT = "OMNIGETWALLETADDRESSBALANCES_ATTEMPT";
export const OMNIGETWALLETADDRESSBALANCES_SUCCESS = "OMNIGETWALLETADDRESSBALANCES_SUCCESS";
export const OMNIGETWALLETADDRESSBALANCES_FAILED = "OMNIGETWALLETADDRESSBALANCES_FAILED";

export const getwalletaddressbalances = () =>async (dispatch, getState) => {

  try {
    const walletAddressBalances=await omni_getwalletaddressbalances(omniService)

    console.log(walletAddressBalances,'=================walletAddressBalanceswalletAddressBalances========================================')
   // let walletAssetsBalances={};
    const walletAssetsBalances = new Map();
    if(walletaddressbalances){
      for(let balances of walletaddressbalances){ 
        for(let item of balances){
          if(walletAssetsBalances.has(item.name)){
            let itemData=walletAssetsBalances.get(item.name); 
            itemData.balance =itemData.balance+item.balance;
            itemData.addressData.push({
              address:balances.address,
              balance:item.balance,
            })
            walletAssetsBalances.set(item.name,itemData);
          }else{
            let itemData={
              name:item.name,
              balance:item.balance,
              addressData:[
                {
                  address:balances.address,
                  balance:item.balance,
                }
              ]
            };
            walletAssetsBalances.set(item.name,itemData);
          }
        } 
      }
    }

    dispatch({type:OMNIGETWALLETADDRESSBALANCES_SUCCESS,walletAddressBalances,walletAssetsBalances:[...walletAssetsBalances.values()]})

  }catch(error){
    console.log(error,'======================errorerror===================================')
    dispatch({type:OMNIGETWALLETADDRESSBALANCES_FAILED,error})
  }

}
 

export const testOmni = () => async (dispatch, getState) => { 
   console.log(getState(),'-------------------------------------------------------------------')
    const {omniService} = getState().rpc; 
    
    const aa = await  omni_listproperties(omniService)  
  
    const bb =await  omni_getinfo(omniService) 
  
    const cc =await  omni_getwalletbalances(omniService)  
    console.log(aa,bb,cc,'testOmnitestOmnitestOmni================================')

    try{ 
      const dd=await omni_getwalletaddressbalances(omniService)
      console.log(dd,'testOmnitestOmnitestOmni================================')
    }catch(e){
      console.log(e,'trycatch================================')
    }


   
   
}  