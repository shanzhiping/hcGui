import OmniAddressList from 'OmniAddressList';
import OperationBotton from './operationBotton';
import AsssetsList from 'OmniAssetsList';
import "style/OmniOverviewTab.less"
import OmniAssetsList from '../../../OmniAssetsList'; 
import { receive } from "connectors";

const browseTypes=[{
        value:'address',
        text:'地址'
    },
    {
      value:'asstes',
      text:'钱包'
    }]

    const createAddressTypes=[{
            value:"newAddress",
            text:"创建新钱包地址"
    },{
        value:"privateAddress",
        text:"输入带私钥的地址"
     }]

class AddressestPage extends React.PureComponent { 
        constructor(props) {
                super(props); 
                this.state={
                   browseType:'address',
                   browseTypeText:'地址',
                }
        }

        onBrowseTypesChanged=(value)=>{
                let obj=browseTypes.find((item)=>{
                        return item.value==value
                })
                this.setState({browseType:value,browseTypeText:obj.text});
         }
         onCreateAddressTypesChanged=value=>{
                if(value==="newAddress"){
                        const { getNextAddressAttempt, account } = this.props; 
                        getNextAddressAttempt(account.value,account.accountType);
                }
         }
        
        render(){
                const {browseType,browseTypeText}=this.state;
                return <Aux>  <div className="tab-card"> 
                        <OperationBotton {...{
                                browseTypes:browseTypes,
                                onBrowseTypesChanged:this.onBrowseTypesChanged,
                                browseTypeText:browseTypeText,
                                createAddressTypes,
                                onCreateAddressTypesChanged:this.onCreateAddressTypesChanged,
                        }}/>  
                        {
                                browseType==='address'?<OmniAddressList /> :<OmniAssetsList/>
                        } 
                        </div>
                </Aux>
        }
}
export default receive(AddressestPage);