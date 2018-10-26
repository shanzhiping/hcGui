import OptionsButton from 'buttons/OptionsButton';

const OperationBotton = ({browseTypes,onBrowseTypesChanged,browseTypeText,createAddressTypes,onCreateAddressTypesChanged} ) => (
    
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

                                 <OptionsButton btnClass="createAddress-operation" { ...{onMenuChanged:onCreateAddressTypesChanged,
                                   menuItemDatas:createAddressTypes,
                                   btnText:"添加钱包地址"
                                } }/>
         </div>
     </div>
 );
 
 export default OperationBotton;