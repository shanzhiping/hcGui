 
 import {omniHistory} from "connectors";
 import HistoryList from './HistoryList';

 class HistoryPage extends React.Component {
    constructor(props) {
        super(props); 
        this.state={
            selectAddress:this.props.walletAddressBalances && this.props.walletAddressBalances.length>0?this.props.walletAddressBalances[0].address:"————"
        }
    }
    componentDidMount(){
        this.props.gettradehistoryforaddress(this.state.selectAddress);
    }
    gettradehistoryforaddress=(address)=>{ 
        this.props.gettradehistoryforaddress(address)
    }
    onAddressChanged=(address)=>{
        this.setState({selectAddress:address});
        this.gettradehistoryforaddress(address);
    }

    onDetail=(id)=>{
        console.log(id);
        this.props.router.push("/history/detail/"+id);
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
        return <HistoryList
            {
                ...{
                    addressList,
                    onAddressChanged:this.onAddressChanged,
                    selectAddress,
                    tradeHistory,
                    onDetail:this.onDetail
                }
            }
        />;
    }
 }
 export default omniHistory(HistoryPage);