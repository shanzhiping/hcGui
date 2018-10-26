import Row from "./row" ;
import PubKeyModal from './publKeyModal';
import SignMessageModal from './signMessageModal'
import {omniAssetsList} from "connectors";

const menuItemDatas=[{
    value:'pubKey',
    text:'公钥'
},
{
  value:'signMessage',
  text:'Sign Message'
}]


 class index extends React.PureComponent {
  
    constructor(props) {
        super(props); 
        this.state={
            showPubKeyModal:false,
            showSignMessageModal:false,
            addr:'',
            pubKey:''
        }
    }

    onCancelSignMessageModal=()=>{
        this.setState({showSignMessageModal:false})
    }
    onCancelPubKeyModal=()=>{
        this.setState({showPubKeyModal:false})
    }

    onMenuChanged= address => value =>{ 
        if(value==='pubKey'){
            this.props.validateAddress(address).then(data=>{  
                this.setState({
                    showPubKeyModal:true,
                    addr:address,
                    pubKey:this.props.validateAddressResponse.getPubKey_asB64()
                })
            });
        }else if(value==='signMessage'){
            this.props.validateAddress(address).then(data=>{  
                this.setState({
                    showSignMessageModal:true,
                    addr:address
                })
            });
        }
        
    } 
    render() {  
        const {walletAddressBalances}  = this.props;
        const {showSignMessageModal,showPubKeyModal,addr,pubKey} =this.state;

        let row=null;
        if(walletAddressBalances){
             row =<div> 
                            {walletAddressBalances.map(item=>{
                            return <Row key={item.address} {
                                ...{ 
                                    data:item,
                                    onMenuChanged:this.onMenuChanged(item.address),
                                    menuItemDatas:menuItemDatas
                                }
                            }/>
                        })
                    }
                    <SignMessageModal  show={showSignMessageModal} onCancelModal={this.onCancelSignMessageModal} address={addr} />
                    <PubKeyModal  show={showPubKeyModal} onCancelModal={this.onCancelPubKeyModal} addr={addr} pubKey={pubKey}/>
                    </div>
        }else{
            row = <div>没有数据</div>
        } 
        return row
    }
}

export default omniAssetsList(index);