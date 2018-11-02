
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectorMap } from "../fp";  
import * as oa from '../actions/OmniActions'

const mapStateToProps = selectorMap({ 
  });
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({ 
    getCategories:oa.getCategories
  }, dispatch);
  
  export default connect(mapStateToProps,mapDispatchToProps);