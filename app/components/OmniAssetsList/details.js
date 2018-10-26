 
import OptionsButton from 'buttons/OptionsButton'
import QRCodeButton from 'buttons/QRCodeButton';

const details=({  
    addressData,
    menuItemDatas,
    onMenuChanged
       })=>{ 
        return (
        <div className="Omni-asstesList-row-table">
            <div className="asstesList-table-row asstesList-table-header">
                    <div>地址</div>
                    <div>余额</div>
                    {/* <div>价值</div> */}
                    <div>操作</div>
            </div>
            {
                addressData.map(item=>{
                    return  <div key={item.address} className="asstesList-table-row asstesList-table-body">
                                <div>
                                    {item.address}<QRCodeButton addr={item.address}/>
                                </div>
                                <div>{item.balance}</div>
                                {/* <div>${item.currentValue}</div> */}
                                <div>
                                   <OptionsButton btnClass="address-operation" { ...{onMenuChanged:onMenuChanged(item.address),
                                   menuItemDatas:menuItemDatas,
                                   btnText:'操作'
                                } }/>
                                </div>
                        </div>
                })
            }
        </div>
    )}


    export default details; 