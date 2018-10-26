import {omniMethod} from './contect';

function objToArray(obj){
    return obj?Object.values(obj):obj;
}

export function omni_listproperties(omniService){  
    return  omniService(omniMethod.listproperties);
}

export function omni_getinfo(omniService){
    return  omniService(omniMethod.getinfo);
}

export function omni_getwalletbalances(omniService){
    return omniService(omniMethod.getwalletbalances);
}

export function omni_getwalletaddressbalances(omniService){
    return omniService(omniMethod.getwalletaddressbalances);
} 
/*
txid	string	required	the hash of the transaction to lookup
*/
export function omni_gettransaction(omniService,params){ 
    return omniService(omniMethod.gettransaction,objToArray(params));
}

export function omni_gettradehistoryforpair(omniService,params){
    return omniService(omniMethod.gettradehistoryforpair,objToArray(params));
}

export function omni_gettradehistoryforaddress(omniService,params){
    return omniService(omniMethod.gettradehistoryforaddress,objToArray(params));
}

/*
fromaddress	string	required	the address to send from
toaddress	string	required	the address of the receiver
propertyid	number	required	the identifier of the tokens to send
amount	string	required	the amount to send
redeemaddress	string	optional	an address that can spend the transaction dust (sender by default)
referenceamount	string	optional	a bitcoin amount that is sent to the receiver (minimal by default)
*/
export function omni_send(omniService,params){

    return omniService(omniMethod.send,objToArray(params));
}
 