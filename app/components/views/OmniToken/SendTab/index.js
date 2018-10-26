import { FormattedMessage as T, injectIntl, defineMessages } from "react-intl";
import SendTabPage from './sendTabPage';
import {omniSend} from "connectors";


const BASE_OUTPUT = { destination: "", amount: null };

class SendPage extends React.Component {
  constructor(props) {
    super(props);
    this.state=this.getInitialState(this.props);
  }

  getInitialState(props) {
    return {
      address:props.walletAssetsBalances?props.walletAssetsBalances[0].addressData[0]:null,
      asset:props.walletAssetsBalances?props.walletAssetsBalances[0]:null, 
      destination: "", 
      amount: null
    };
  }

  getOnChangeOutputDestination=(destination)=> { 
      let destinationInvalid = false;
      let updateDestinationState = () => {
        this.setState({
          destination,
          destinationInvalid
        },this.onAttemptConstructTransaction);
      };

      this.props.validateAddress(destination)
        .then( resp => {
          destinationInvalid = !resp.getIsValid();
          updateDestinationState();
        })
        .catch( () => {
          destinationInvalid = false;
          updateDestinationState();
        }); 
  }
  getOnChangeOutputAmount=(e)=> {    
    const value=e.target.value; 
    if (value !== this.state.amount) {
      this.setState({amount:value},this.onAttemptConstructTransaction);
    }
  }
  getAddressError() {
    const { destination,destinationInvalid } = this.state; 
    if (!destination || destinationInvalid) return <T id="send.errors.invalidAddress" m="*Please enter a valid address" />;
  }

  getAmountError() {
    const { amount} = this.state; 
    if (isNaN(amount)) return <T id="send.errors.invalidAmount" m="*Please enter a valid amount" /> ;
    if (amount <= 0) return <T id="send.errors.negativeAmount" m="*Please enter a valid amount (> 0)" />;
  }

  onAddressChange=(address)=>{
    if(address!==this.state.address){
      this.setState({address})
    } 
  }

  onAssetsChange=(asset)=>{
    if(asset!==this.state.asset){
      this.setState({asset})
    } 
  }

  getIsValid() {
    const {address,asset,destination,amount} = this.state; 
    return !!(address && asset && destination && amount && (parseFloat(amount)<=parseFloat(address.balance)));
  }
  onSend=(privpass) =>{
    const { send_func,onAttemptSignTransaction,unsignedTransaction,nextAddressAccount } = this.props; 
    const {address,destination,amount} =this.state; 
    if (!privpass || !this.getIsValid()) return;
    onAttemptSignTransaction && onAttemptSignTransaction(privpass, unsignedTransaction);
    send_func && nextAddressAccount && send_func({fromaddress:address.address,toaddress:destination,propertyid:address.propertyid,amount:amount});
    this.onClearTransaction();
  }

  onAttemptConstructTransaction=()=> {
    const { onAttemptConstructTransaction } = this.props;  
    if (!this.getIsValid()) return; 
    onAttemptConstructTransaction && onAttemptConstructTransaction(
      0,
      0,
      [{amount: this.state.amount, destination: this.state.destination }]
    );
  }




  onClearTransaction=()=> {
    this.setState(this.getInitialState(this.props)); 
  }

  componentWillReceiveProps=(nextProps)=>{ 
    if (nextProps.walletAssetsBalances != this.props.walletAssetsBalances) {
      this.setState(this.getInitialState(nextProps),this.onAttemptConstructTransaction);
    }
  }
  render() { 
    const {walletAssetsBalances} =this.props;
    const {address,asset,destination,amount} = this.state;
    const isValid = this.getIsValid();
    return  <SendTabPage {...{
        addressList:asset?asset.addressData:null,
        onAddressChange:this.onAddressChange,
        assetsList:walletAssetsBalances,
        onAssetsChange:this.onAssetsChange,
        getOnChangeOutputDestination:this.getOnChangeOutputDestination,
        getOnChangeOutputAmount:this.getOnChangeOutputAmount,
        addressError:this.getAddressError(),
        amountError:this.getAmountError(), 
        onSubmit:this.onSend,
        address,
        asset:asset,
        destination,
        amount,
        isValid

    }}/>
  } 
}

export default omniSend(injectIntl(SendPage));
