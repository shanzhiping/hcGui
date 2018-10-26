 
 const details=({  
            assetsDatas
       })=>(
        <div className="addressList-row-detail">
            <div className="addressList-row-detail-header">
                    <div>资产</div>
                    <div>余额</div> 
            </div> 
            {
                assetsDatas.map(item=>{
                    return  <div key={item.name}>
                                <div>{item.name}</div>
                                <div>{item.balance}</div> 
                            </div>
                })
            }
        </div>
    )


    export default details; 