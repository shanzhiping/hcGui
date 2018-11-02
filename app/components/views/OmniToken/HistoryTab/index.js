 
 import {omniHistory} from "connectors";
 import HistoryTabPage from './historyTabPage';

 class HistoryPage extends React.Component {
    constructor(props) {
        super(props); 
        this.state={
            selectAddress:this.props.walletAddressBalances?this.props.walletAddressBalances[0].address:"————"
        }
    }
    componentDidMount(){
        this.props.gettradehistoryforaddress(this.state.selectAddress);
    }
    gettradehistoryforaddress(address){
        this.props.gettradehistoryforaddress(address)
    }
    onAddressChanged=(address)=>{
        this.setState({selectAddress:address});
        this.gettradehistoryforaddress(address);
    }

    render(){
        const {walletAddressBalances,tradeHistory} = this.props;
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
                    tradeHistory
                }
            }
        />;
    }
 }
 export default omniHistory(HistoryPage);