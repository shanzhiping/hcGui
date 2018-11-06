import { omniMethod } from './contect';
import { categories } from '../datas'

function objToArray(obj) {
    return obj ? Object.values(obj) : obj;
}

export function omni_listproperties(omniService) {
    return omniService(omniMethod.listproperties);
}

/** 
 * @param {*} omniService 
 * @param {propertyid	number	required	the identifier of the tokens or property} params 
 */
export function omni_getproperty(omniService, params) {
    return omniService(omniMethod.getproperty, objToArray(params));
}

export function omni_getinfo(omniService) {
    return omniService(omniMethod.getinfo);
}

export function omni_getwalletbalances(omniService) {
    return omniService(omniMethod.getwalletbalances);
}

export function omni_getwalletaddressbalances(omniService) {
    return omniService(omniMethod.getwalletaddressbalances);
}
/**
 * @param {txid	string	required	the hash of the transaction to lookup}
*/
export function omni_gettransaction(omniService, params) {
    return omniService(omniMethod.gettransaction, objToArray(params));
}
/**
 * 
 * @param {txid	string	optional	address filter (default: "*")}
 * @param {count	number	optional	show at most n transactions (default: 10)}
 * @param {skip	number	optional	skip the first n transactions (default: 0)}
 * @param {startblock	number	optional	first block to begin the search (default: 0)}
 * @param {endblock	number	optional	last block to include in the search (default: 999999999)}
 */
export function omni_listtransactions(omniService, params) {
    return omniService(omniMethod.listtransactions, objToArray(params));
}

export function omni_gettradehistoryforpair(omniService, params) {
    return omniService(omniMethod.gettradehistoryforpair, objToArray(params));
}
/** 
 * @param {address	string	required	address to retrieve history for}
 * @param {count	number	optional	number of orders to retrieve (default: 10)}
 * @param {propertyid	number	optional	filter by propertyid transacted (default: no filter)}
*/
export function omni_gettradehistoryforaddress(omniService, params) {
    return omniService(omniMethod.gettradehistoryforaddress, objToArray(params));
}

/**
 * @param {fromaddress	string	required	the address to send from}
 * @param {toaddress	string	required	the address of the receiver}
 * @param {propertyid	number	required	the identifier of the tokens to send}
 * @param {amount	string	required	the amount to send}
 * @param {redeemaddress	string	optional	an address that can spend the transaction dust (sender by default)}
 * @param {referenceamount	string	optional	a bitcoin amount that is sent to the receiver (minimal by default)}
*/
export function omni_send(omniService, params) {

    return omniService(omniMethod.send, objToArray(params));
}
/** 
 * @param {fromaddress	string	required	the address to send from}
 * @param {ecosystem	number	required	the ecosystem to create the tokens in (1 for main ecosystem, 2 for test ecosystem)}
 * @param {type	number	required	the type of the tokens to create: (1 for indivisible tokens, 2 for divisible tokens)}
 * @param {previousid	number	required	an identifier of a predecessor token (0 for new tokens)}
 * @param {category	string	required	a category for the new tokens (can be "")}
 * @param {subcategory	string	required	a subcategory for the new tokens (can be "")}
 * @param {name	string	required	the name of the new tokens to create}
 * @param {url	string	required	an URL for further information about the new tokens (can be "")}
 * @param {data	string	required	a description for the new tokens (can be "")}
 * @param {amount	string	required	the number of tokens to create } 
 */
export function omni_sendissuancefixed(omniService, params) {
    return omniService(omniMethod.sendissuancefixed, objToArray(params));
}

/**
 * @param {fromaddress	string	required	the address to send from}
* @param {ecosystem	number	required	the ecosystem to create the tokens in (1 for main ecosystem, 2 for test ecosystem)}
* @param {type	number	required	the type of the tokens to create: (1 for indivisible tokens, 2 for divisible tokens)}
* @param {previousid	number	required	an identifier of a predecessor token (0 for new tokens)}
* @param {category	string	required	a category for the new tokens (can be "")}
* @param {subcategory	string	required	a subcategory for the new tokens (can be "")}
* @param {name	string	required	the name of the new tokens to create}
* @param {url	string	required	an URL for further information about the new tokens (can be "")}
* @param {data	string	required	a description for the new tokens (can be "")}
 */
export function omni_sendissuancemanaged(omniService, params) {
    return omniService(omniMethod.sendissuancemanaged, objToArray(params));
}



export function omni_getCategories() {
    return categories;
}
