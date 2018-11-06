
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectorMap } from "../fp";  
import * as sel from "selectors";
import * as oa from '../actions/OmniActions'

const mapStateToProps = selectorMap({ 
     walletAddressBalances: sel.walletAddressBalances,
  });
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({ 
    getCategories:oa.getCategories,
    sendIssuanceFixed:oa.sendIssuanceFixed_func,
    sendIssuanceManaged:oa.sendIssuanceManaged_func
  }, dispatch);
  
  export default connect(mapStateToProps,mapDispatchToProps);