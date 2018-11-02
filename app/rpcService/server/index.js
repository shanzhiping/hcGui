import {omniMethod} from './contect';
import {categories} from '../datas'

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
/**
 * @param {txid	string	required	the hash of the transaction to lookup}
*/
export function omni_gettransaction(omniService,params){ 
    return omniService(omniMethod.gettransaction,objToArray(params));
}
/**
 * 
 * @param {txid	string	optional	address filter (default: "*")}
 * @param {count	number	optional	show at most n transactions (default: 10)}
 * @param {skip	number	optional	skip the first n transactions (default: 0)}
 * @param {startblock	number	optional	first block to begin the search (default: 0)}
 * @param {endblock	number	optional	last block to include in the search (default: 999999999)} omniService}
 */
export function omni_listtransactions(omniService,params){
    return omniService(omniMethod.listtransactions,objToArray(params));
}

export function omni_gettradehistoryforpair(omniService,params){
    return omniService(omniMethod.gettradehistoryforpair,objToArray(params));
}
/** 
 * @param {address	string	required	address to retrieve history for}
 * @param {count	number	optional	number of orders to retrieve (default: 10)}
 * @param {propertyid	number	optional	filter by propertyid transacted (default: no filter)}
*/
export function omni_gettradehistoryforaddress(omniService,params){
    return omniService(omniMethod.gettradehistoryforaddress,objToArray(params));
}

/**
 * @param {fromaddress	string	required	the address to send from}
 * @param {toaddress	string	required	the address of the receiver}
 * @param {propertyid	number	required	the identifier of the tokens to send}
 * @param {amount	string	required	the amount to send}
 * @param {redeemaddress	string	optional	an address that can spend the transaction dust (sender by default)}
 * @param {referenceamount	string	optional	a bitcoin amount that is sent to the receiver (minimal by default)}
*/
export function omni_send(omniService,params){

    return omniService(omniMethod.send,objToArray(params));
}

export function omni_getCategories(){
    return categories;
}
 