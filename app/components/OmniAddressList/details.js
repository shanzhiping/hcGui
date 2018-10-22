 
 const details=({  
    addressData
       })=>(
        <div className="addressList-row-detail">
            <div className="addressList-row-detail-header">
                    <div>资产</div>
                    <div>余额</div> 
            </div>
            <div>
                <div>HC</div>
                <div>0.00</div> 
            </div>
            <div>
                <div>HC</div>
                <div>0.00</div> 
            </div>
            <div>
                <div>HC</div>
                <div>0.00</div> 
            </div>
            {/* {
                addressData.map(item=>{
                    return  <div key={item.address} className="asstesList-table-row asstesList-table-body">
                                <div>{item.address}</div>
                                <div>{item.balance}</div> 
                        </div>
                })
            } */}
        </div>
    )


    export default details; 