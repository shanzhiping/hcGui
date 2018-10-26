 
 import {omniHistory} from "connectors";
 import HistoryTabPage from './historyTabPage';

 class HistoryPage extends React.Component {
    constructor(props) {
        super(props); 
        this.state={
            selectAddress:this.props.walletAddressBalances?this.props.walletAddressBalances[0].address:"————"
        }
    }
    onAddressChanged=(address)=>{

    }

    render(){
        const {walletAddressBalances} = this.props;
        const {selectAddress} =this.state;
        const addressList = walletAddressBalances.map(item=>{
            return {
                text:item.address,
                value:item.address,
            }
        })
        return <HistoryTabPage
            {
                ...{
                    addressList,
                    onAddressChanged:this.onAddressChanged,
                    selectAddress,

                }
            }
        />;
    }
 }
 export default omniHistory(HistoryPage);