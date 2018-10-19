
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectorMap } from "../fp";
import * as sel from "selectors";


const mapStateToProps = selectorMap({
    walletAddressBalances: sel.walletAddressBalances,
    walletAssetsBalances: sel.walletAssetsBalances, 
  });
  

  
  export default connect(mapStateToProps);