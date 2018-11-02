import * as sel from "selectors";
import {getOmnitService} from '../rpcService/rpc';
import {omni_getwalletbalances,omni_listproperties, omni_getinfo,omni_getwalletaddressbalances,omni_send,omni_gettransaction,omni_gettradehistoryforpair,
  omni_gettradehistoryforaddress,omni_getCategories } from '../rpcService/server';
 
//新增 Omni服务  存放于 rpc Store中
export const GETOMNISERVICE_ATTEMPT = "GETOMNISERVICE_ATTEMPT";
export const GETOMNISERVICE_SUCCESS = "GETOMNISERVICE_SUCCESS";
export const GETOMNISERVICE_FAILED = "GETOMNISERVICE_FAILED";
export const getOmniServiceAttempt = () => (dispatch,getState)=>{ 
  const { grpc: { address, port } } = getState(); 
  dispatch({omniService:getOmnitService(sel.isTestNet(getState()),address),type:GETOMNISERVICE_SUCCESS});

  setTimeout(() => { dispatch(getwalletaddressbalances_func()); }, 1000);
  setTimeout(() => { dispatch(listproperties_func()); }, 1000);
  
}

export const OMNIGETWALLETADDRESSBALANCES_ATTEMPT = "OMNIGETWALLETADDRESSBALANCES_ATTEMPT";
export const OMNIGETWALLETADDRESSBALANCES_SUCCESS = "OMNIGETWALLETADDRESSBALANCES_SUCCESS";
export const OMNIGETWALLETADDRESSBALANCES_FAILED = "OMNIGETWALLETADDRESSBALANCES_FAILED";

export const getwalletaddressbalances_func = () =>async (dispatch, getState) => {

  try {
    const { omniService } = getState().rpc; 
    const walletAddressBalances=await omni_getwalletaddressbalances(omniService)
    const walletAssetsBalances = new Map();
    if(walletAddressBalances){
      for(const data of walletAddressBalances){ 
        data.balances.forEach(item => {
          if(walletAssetsBalances.has(item.name)){
            let itemData=walletAssetsBalances.get(item.name); 
            itemData.balance =parseFloat(itemData.balance)+parseFloat(item.balance);
            itemData.propertyid=item.propertyid;
            itemData.addressData.push({ 
              address:data.address,
              balance:item.balance,
            })
            walletAssetsBalances.set(item.name,itemData);
          }else{
            let itemData={ 
              name:item.name,
              balance:item.balance,
              addressData:[
                {
                  propertyid:item.propertyid,
                  address:data.address,
                  balance:item.balance,
                }
              ]
            };
            walletAssetsBalances.set(item.name,itemData);
          }
        });
        
      }
    } 
    dispatch({type:OMNIGETWALLETADDRESSBALANCES_SUCCESS,walletAddressBalances,walletAssetsBalances:[...walletAssetsBalances.values()]})
  }catch(error){
    console.error(error)
    dispatch({type:OMNIGETWALLETADDRESSBALANCES_FAILED,error})
  }

}

export const OMNILISTPROPERTIES_ATTEMPT = "OMNILISTPROPERTIES_ATTEMPT";
export const OMNILISTPROPERTIES_SUCCESS = "OMNILISTPROPERTIES_SUCCESS";
export const OMNILISTPROPERTIES_FAILED = "OMNILISTPROPERTIES_FAILED";
export const listproperties_func=()=>async (dispatch, getState)=>{
  try {
    const { omniService } = getState().rpc; 
    const data=await omni_listproperties(omniService); 
    dispatch({type:OMNILISTPROPERTIES_SUCCESS,listproperties:data})
  }catch(error){
    console.error(error);
  }
}

export const gettransaction_func=(txid)=>async (dispatch,getState)=>{
  try{
  const { omniService } = getState().rpc; 
    const data=await omni_gettransaction(omniService,{txid}); 
  }catch(error){ 
    console.error(error,' gettransaction_func  error')
  }
}


export const OMNIGETTRADEHISTORYFORADDRESS_SUCCESS = "OMNIGETTRADEHISTORYFORADDRESS_SUCCESS";
export const OMNIGETTRADEHISTORYFORADDRESS_FAILED = "OMNIGETTRADEHISTORYFORADDRESS_FAILED";
export const  gettradehistoryforaddress_func=(address)=>async (dispatch,getState)=>{
  try{
    const { omniService } = getState().rpc; 
    const data=await omni_gettradehistoryforaddress(omniService,{address}); 
    dispatch({type:OMNIGETTRADEHISTORYFORADDRESS_SUCCESS,tradeHistory:data})
  }catch(error){ 
    console.error(error,' gettradehistoryforaddress_func  error');
    dispatch({type:OMNIGETTRADEHISTORYFORADDRESS_FAILED,error})
  }
}


export const send_func=(params)=>async (dispatch, getState) =>{
  try {
    const { omniService } = getState().rpc; 
    const data=await omni_send(omniService,params); 

    setTimeout(() => { dispatch(gettransaction_func(data)); }, 1000);
    setTimeout(() => { dispatch(getwalletaddressbalances_func()); }, 1000);
  }catch(error){ 
    console.error(error,' send_func  error ')
  }
}
 

export const testOmni = () => async (dispatch, getState) => {  
    const {omniService} = getState().rpc; 
    
    const aa = await  omni_listproperties(omniService)  
  
    const bb =await  omni_getinfo(omniService) 
  
    const cc =await  omni_getwalletbalances(omniService)   

    try{ 
      const dd=await omni_getwalletaddressbalances(omniService) 
    }catch(e){
      
    }


   
   
}  
export const getCategories=()=> async (dispatch, getState)=>{
  return omni_getCategories();
}