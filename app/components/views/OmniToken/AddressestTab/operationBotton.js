 
import OmniAddressList from 'OmniAddressList';

import OptionsButton from 'OmniAssetsList/optionsButton';


const OperationBotton = ({browseTypes,onBrowseTypesChanged,browseTypeText} ) => (
    
     <div className="omni-address-operation-area">
         <div>我的钱包地址</div>
         <div>
             预览 <OptionsButton btnClass="browseType-operation" { ...{onMenuChanged:onBrowseTypesChanged,
                                   menuItemDatas:browseTypes,
                                   btnText:browseTypeText
                                } }/>
                                 <button className="send-operation-btn" onClick={()=>{
                                     console.log('发送')
                                 }}>发送</button>
         </div>
     </div>
 );
 
 export default OperationBotton;