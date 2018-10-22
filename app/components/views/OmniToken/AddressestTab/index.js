 import React from 'react';
import OmniAddressList from 'OmniAddressList';
import OperationBotton from './operationBotton';
import AsssetsList from 'OmniAssetsList';
import "style/OmniOverviewTab.less"
import OmniAssetsList from '../../../OmniAssetsList';

const browseTypes=[{
        value:'address',
        text:'地址'
    },
    {
      value:'asstes',
      text:'钱包'
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
        
        render(){
                const {browseType,browseTypeText}=this.state;
                return <Aux>  <div className="tab-card"> 
                        <OperationBotton {...{
                                browseTypes:browseTypes,
                                onBrowseTypesChanged:this.onBrowseTypesChanged,
                                browseTypeText:browseTypeText
                        }}/>  
                        {
                                browseType==='address'?<OmniAddressList /> :<OmniAssetsList/>
                        } 
                        </div>
                </Aux>
        }
}
export default AddressestPage;