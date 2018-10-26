import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectorMap } from "../fp";
import * as sel from "selectors"; 


const mapStateToProps = selectorMap({
    walletAddressBalances: sel.walletAddressBalances
  });
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({ 
  }, dispatch);
  
  export default connect(mapStateToProps,mapDispatchToProps);